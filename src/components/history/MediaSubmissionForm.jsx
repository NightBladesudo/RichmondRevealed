import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { base44 } from '@/api/base44Client';

export default function MediaSubmissionForm({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    submitter_name: '',
    submitter_email: '',
    media_type: 'image'
  });
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const isImage = selectedFile.type.startsWith('image/');
      const isVideo = selectedFile.type.startsWith('video/');
      
      if (isImage || isVideo) {
        setFile(selectedFile);
        setFormData({ ...formData, media_type: isImage ? 'image' : 'video' });
        setError('');
      } else {
        setError('Please select an image or video file');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setUploading(true);

    try {
      if (!file) {
        throw new Error('Please select a file to upload');
      }

      // Upload the file
      const { file_url } = await base44.integrations.Core.UploadFile({ file });

      // Create submission
      await base44.entities.MediaSubmission.create({
        ...formData,
        media_url: file_url,
        status: 'pending'
      });

      setSuccess(true);
      setTimeout(() => {
        onSuccess?.();
        onClose();
      }, 2000);
    } catch (err) {
      setError(err.message || 'Failed to submit media. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="font-display text-2xl text-[#1e3a5f] font-bold mb-2">
          Submission Received!
        </h3>
        <p className="text-gray-600">
          Thank you for contributing to Richmond's history. Your submission will be reviewed by our team.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl text-[#1e3a5f] font-bold">
          Submit Historical Media
        </h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Photo or Video *
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#a63d2f] transition-colors">
            <input
              type="file"
              id="file-upload"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              {file ? (
                <p className="text-[#1e3a5f] font-semibold">{file.name}</p>
              ) : (
                <>
                  <p className="text-gray-600 mb-1">Click to upload image or video</p>
                  <p className="text-sm text-gray-400">JPG, PNG, MP4, MOV</p>
                </>
              )}
            </label>
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title *
          </label>
          <Input
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g., Monument Avenue in 1920"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Tell us about this media..."
            rows={4}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Historical Era *
          </label>
          <Select
            required
            value={formData.category}
            onValueChange={(value) => setFormData({ ...formData, category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select era" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Colonial Era">Colonial Era</SelectItem>
              <SelectItem value="Civil War">Civil War</SelectItem>
              <SelectItem value="Industrial Age">Industrial Age</SelectItem>
              <SelectItem value="Civil Rights">Civil Rights</SelectItem>
              <SelectItem value="Modern Era">Modern Era</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submitter Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <Input
              required
              value={formData.submitter_name}
              onChange={(e) => setFormData({ ...formData, submitter_name: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Email *
            </label>
            <Input
              required
              type="email"
              value={formData.submitter_email}
              onChange={(e) => setFormData({ ...formData, submitter_email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            <AlertCircle className="w-5 h-5" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={uploading}
            className="flex-1 bg-[#a63d2f] hover:bg-[#8b3426]"
          >
            {uploading ? 'Uploading...' : 'Submit for Review'}
          </Button>
        </div>
      </form>
    </div>
  );
}