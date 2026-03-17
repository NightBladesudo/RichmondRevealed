import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Camera, Image } from 'lucide-react';

const imageCitations = [
  // HOME PAGE
  {
    page: 'Home Page',
    items: [
      {
        number: 1,
        location: 'Home Page – Hero Background',
        url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1280',
        source: 'Unsplash',
        photographer: 'Pedro Lastra',
        mla: 'Lastra, Pedro. City Skyline at Night. Unsplash, https://images.unsplash.com/photo-1477959858617-67f85cf4f1df. Accessed 16 Mar. 2026.'
      }
    ]
  },
  // HISTORY PAGE
  {
    page: 'History of Richmond Page',
    items: [
      {
        number: 2,
        location: 'History Page – Hero Background',
        url: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1280',
        source: 'Unsplash',
        photographer: 'Unsplash Contributor',
        mla: 'Unsplash Contributor. Historic Architecture. Unsplash, https://images.unsplash.com/photo-1568454537842-d933259bb258. Accessed 16 Mar. 2026.'
      },
      {
        number: 3,
        location: 'History Page – Colonial Era',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/0a58aadd4_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Colonial Era Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 4,
        location: 'History Page – Civil War Era',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/e771936a2_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Civil War Era Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 5,
        location: 'History Page – Modern Renaissance',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/434cd461f_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Modern Renaissance Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      }
    ]
  },
  // CALENDAR OF EVENTS
  {
    page: 'Calendar of Events Page',
    items: [
      {
        number: 6,
        location: 'Events Page – Hero Background',
        url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1280',
        source: 'Unsplash',
        photographer: 'Aditya Chinchure',
        mla: 'Chinchure, Aditya. People at Concert. Unsplash, https://images.unsplash.com/photo-1501281668745-f7f57925c3b4. Accessed 16 Mar. 2026.'
      }
    ]
  },
  // ATTRACTIONS & LANDMARKS
  {
    page: 'Attractions & Landmarks Page',
    items: [
      {
        number: 7,
        location: 'Attractions Page – Hero Background',
        url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1280',
        source: 'Unsplash',
        photographer: 'Toomas Tartes',
        mla: 'Tartes, Toomas. Mountain Hiking. Unsplash, https://images.unsplash.com/photo-1551632811-561732d1e306. Accessed 16 Mar. 2026.'
      },
      {
        number: 8,
        location: 'Attractions – Virginia Museum of Fine Arts',
        url: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600',
        source: 'Unsplash',
        photographer: 'Unsplash Contributor',
        mla: 'Unsplash Contributor. Art Museum Interior. Unsplash, https://images.unsplash.com/photo-1518998053901-5348d3961a04. Accessed 16 Mar. 2026.'
      },
      {
        number: 9,
        location: 'Attractions – Maymont',
        url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/a94a036fd_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Maymont Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 10,
        location: 'Attractions – Belle Isle',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/1fc761363_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Belle Isle Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 11,
        location: 'Attractions – Virginia State Capitol',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/11d2af63e_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Virginia State Capitol Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 12,
        location: 'Attractions – Lewis Ginter Botanical Garden',
        url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600',
        source: 'Unsplash',
        photographer: 'Unsplash Contributor',
        mla: 'Unsplash Contributor. Botanical Garden. Unsplash, https://images.unsplash.com/photo-1585320806297-9794b3e4eeae. Accessed 16 Mar. 2026.'
      },
      {
        number: 13,
        location: 'Attractions – Hollywood Cemetery',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/7ca0f9d49_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Hollywood Cemetery Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      }
    ]
  },
  // LOCAL BUSINESSES & DINING
  {
    page: 'Local Businesses & Dining Page',
    items: [
      {
        number: 14,
        location: 'Business Page – Hero Background',
        url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1280',
        source: 'Unsplash',
        photographer: 'daan evers',
        mla: 'Evers, Daan. Interior of a Coffee Shop. Unsplash, https://images.unsplash.com/photo-1554118811-1e0d58224f24. Accessed 16 Mar. 2026.'
      }
    ]
  },
  // NEIGHBORHOODS
  {
    page: 'Neighborhoods Page',
    items: [
      {
        number: 15,
        location: 'Neighborhoods Page – Hero Background',
        url: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=1280',
        source: 'Unsplash',
        photographer: 'Joel & Jasmin Førestbird',
        mla: 'Førestbird, Joel & Jasmin. Person Hiking Above Mountain Overlooking River. Unsplash, https://images.unsplash.com/photo-1533240332313-0db49b459ad6. Accessed 16 Mar. 2026.'
      },
      {
        number: 16,
        location: 'Neighborhoods – The Fan District',
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
        source: 'Pixabay',
        photographer: 'Pexels',
        mla: 'Pexels. House Garage Driveway Stone. Pixabay, https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg. Accessed 16 Mar. 2026.'
      },
      {
        number: 17,
        location: 'Neighborhoods – Church Hill',
        url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/b30ab53f1_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Church Hill Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 18,
        location: 'Neighborhoods – Scott\'s Addition',
        url: 'https://images.unsplash.com/photo-1542835497-a6813df96ed9?w=1280',
        source: 'Unsplash',
        photographer: 'Claude Piché',
        mla: 'Piché, Claude. Brown Pizza Oven. Unsplash, https://images.unsplash.com/photo-1542835497-a6813df96ed9. Accessed 16 Mar. 2026.'
      },
      {
        number: 19,
        location: 'Neighborhoods – Carytown',
        url: 'https://cdn.pixabay.com/photo/2018/08/01/17/15/city-3577655_1280.jpg',
        source: 'Pixabay',
        photographer: 'InstagramFOTOGRAFIN',
        mla: 'InstagramFOTOGRAFIN. City Shopping Street. Pixabay, https://cdn.pixabay.com/photo/2018/08/01/17/15/city-3577655_1280.jpg. Accessed 16 Mar. 2026.'
      },
      {
        number: 20,
        location: 'Neighborhoods – Shockoe Bottom',
        url: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg',
        source: 'Pixabay',
        photographer: 'Pexels',
        mla: 'Pexels. Audience Concert Music. Pixabay, https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg. Accessed 16 Mar. 2026.'
      },
      {
        number: 21,
        location: 'Neighborhoods – Oregon Hill',
        url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/5e7d9dc14_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Oregon Hill Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 22,
        location: 'Neighborhoods – Museum District',
        url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/388e5f51c_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Museum District Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 23,
        location: 'Neighborhoods – Manchester',
        url: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
        source: 'Pixabay',
        photographer: 'Pexels',
        mla: 'Pexels. Astronomy Bright Constellation. Pixabay, https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg. Accessed 16 Mar. 2026.'
      },
      {
        number: 24,
        location: 'Neighborhoods – Libbie & Grove',
        url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/4838a8e33_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Libbie & Grove Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 25,
        location: 'Neighborhoods – Jackson Ward',
        url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/6feaf8f01_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Jackson Ward Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 26,
        location: 'Neighborhoods – Bellevue',
        url: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_1280.jpg',
        source: 'Pixabay',
        photographer: 'Pexels',
        mla: 'Pexels. Couch Space Living Room Interior. Pixabay, https://cdn.pixabay.com/photo/2016/11/18/17/20/couch-1835923_1280.jpg. Accessed 16 Mar. 2026.'
      },
      {
        number: 27,
        location: 'Neighborhoods – South of Broad',
        url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/bae1a67d7_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. South of Broad Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 28,
        location: 'Neighborhoods – Near West End',
        url: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg',
        source: 'Pixabay',
        photographer: 'Pexels',
        mla: 'Pexels. Architecture Building City House. Pixabay, https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg. Accessed 16 Mar. 2026.'
      },
      {
        number: 29,
        location: 'Neighborhoods – Northside',
        url: 'https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874_1280.jpg',
        source: 'Pixabay',
        photographer: 'ROverhate',
        mla: 'ROverhate. Colorful Mural Wall Art. Pixabay, https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874_1280.jpg. Accessed 16 Mar. 2026.'
      }
    ]
  },
  // EDUCATION & RESOURCES
  {
    page: 'Education & Resources Page',
    items: [
      {
        number: 30,
        location: 'Education Page – Hero Background',
        url: 'https://images.unsplash.com/20/cambridge.JPG?w=1280',
        source: 'Unsplash',
        photographer: 'Vadim Sherbakov',
        mla: 'Sherbakov, Vadim. Brown Concrete Palace Under Blue Sky. Unsplash, https://images.unsplash.com/20/cambridge.JPG. Accessed 16 Mar. 2026.'
      },
      {
        number: 31,
        location: 'Education – Virginia Commonwealth University',
        url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/1193eecdf_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Virginia Commonwealth University Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 32,
        location: 'Education – University of Richmond',
        url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/4f2be7a0e_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. University of Richmond Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 33,
        location: 'Education – Virginia Union University',
        url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/405dd2654_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Virginia Union University Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 34,
        location: 'Education – Richmond Public Library',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/927f19671_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Richmond Public Library Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 35,
        location: 'Education – Chop Suey Books',
        url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69642c930690d6cb4d4ad04d/33d599d2a_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Chop Suey Books Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 36,
        location: 'Education – Community Centers',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/41105a7ef_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Community Centers Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 37,
        location: 'Education – Youth Programs',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/9132a02fe_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Youth Programs Image. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      }
    ]
  },
  // VIRTUAL REALITY
  {
    page: 'Virtual Reality Page',
    items: [
      {
        number: 38,
        location: 'Virtual Reality Page – Hero Background',
        url: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=1280',
        source: 'Unsplash',
        photographer: 'Jessica Lewis',
        mla: 'Lewis, Jessica. Boy Wearing Black and White VR Headset. Unsplash, https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1. Accessed 16 Mar. 2026.'
      },
      {
        number: 39,
        location: 'Virtual Reality – Monument Avenue Card',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/0bd593351_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Monument Avenue VR Card. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 40,
        location: 'Virtual Reality – Belle Isle Card',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/99a87209e_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Belle Isle VR Card. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 41,
        location: 'Virtual Reality – Virginia State Capitol Card',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/300ec980f_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. Virginia State Capitol VR Card. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 42,
        location: 'Virtual Reality – Carytown Card',
        url: 'https://cdn.pixabay.com/photo/2018/08/01/17/15/city-3577655_1280.jpg',
        source: 'Pixabay',
        photographer: 'InstagramFOTOGRAFIN',
        mla: 'InstagramFOTOGRAFIN. City Shopping Street. Pixabay, https://cdn.pixabay.com/photo/2018/08/01/17/15/city-3577655_1280.jpg. Accessed 16 Mar. 2026.'
      },
      {
        number: 43,
        location: 'Virtual Reality – James River Park Card',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/818bcc2e2_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: 'Pixabay Contributor. James River Park VR Card. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026.'
      },
      {
        number: 44,
        location: 'Virtual Reality – Scott\'s Addition Card',
        url: 'https://media.base44.com/images/public/69642c930690d6cb4d4ad04d/61a794f27_image.png',
        source: 'Pixabay',
        photographer: 'Pixabay Contributor',
        mla: "Pixabay Contributor. Scott's Addition VR Card. Pixabay, https://pixabay.com. Accessed 16 Mar. 2026."
      }
    ]
  },
  // PLAN YOUR TRIP
  {
    page: 'Plan Your Trip Page',
    items: [
      {
        number: 46,
        location: 'Plan Your Trip – Hero Background',
        url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1280',
        source: 'Unsplash',
        photographer: 'Unsplash Contributor',
        mla: 'Unsplash Contributor. Travel Planning. Unsplash, https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1. Accessed 16 Mar. 2026.'
      }
    ]
  },
  // CITATIONS PAGE
  {
    page: 'Citations Page',
    items: [
      {
        number: 45,
        location: 'Citations Page – Hero Background',
        url: 'https://cdn.pixabay.com/photo/2015/11/19/21/10/knowledge-1052010_1280.jpg',
        source: 'Pixabay',
        photographer: 'tednewkirk',
        mla: 'Tednewkirk. Book Asia Children Education. Pixabay, https://cdn.pixabay.com/photo/2015/11/19/21/10/knowledge-1052010_1280.jpg. Accessed 16 Mar. 2026.'
      }
    ]
  }
];

const textCitations = [
  {
    category: 'Historical Resources',
    sources: [
      {
        title: 'Valentine Richmond History Center',
        url: 'https://valentinemuseum.com',
        description: 'Primary source for Richmond history and archives',
        mla: '"Valentine Richmond History Center." Valentine, www.valentinemuseum.com. Accessed 16 Mar. 2026.'
      },
      {
        title: 'Library of Virginia',
        url: 'https://www.lva.virginia.gov',
        description: 'State archives and historical records',
        mla: '"Library of Virginia." Library of Virginia, www.lva.virginia.gov. Accessed 16 Mar. 2026.'
      },
      {
        title: 'American Civil War Museum',
        url: 'https://acwm.org',
        description: 'Civil War history and documentation',
        mla: '"American Civil War Museum." American Civil War Museum, acwm.org. Accessed 16 Mar. 2026.'
      }
    ]
  },
  {
    category: 'Tourism & Attractions',
    sources: [
      {
        title: 'Visit Richmond',
        url: 'https://www.visitrichmondva.com',
        description: 'Official tourism board for Richmond, Virginia',
        mla: '"Visit Richmond." Richmond Region Tourism, www.visitrichmondva.com. Accessed 16 Mar. 2026.'
      },
      {
        title: 'Richmond Region Tourism',
        url: 'https://www.visitrichmond.com',
        description: 'Regional tourism information and guides',
        mla: '"Richmond Region Tourism." Richmond Region Tourism, www.visitrichmond.com. Accessed 16 Mar. 2026.'
      }
    ]
  },
  {
    category: 'City Government',
    sources: [
      {
        title: 'City of Richmond',
        url: 'https://www.rva.gov',
        description: 'Official city government website',
        mla: '"City of Richmond." City of Richmond, Virginia, www.rva.gov. Accessed 16 Mar. 2026.'
      },
      {
        title: 'Richmond Public Schools',
        url: 'https://www.rvaschools.net',
        description: 'Official school district information',
        mla: '"Richmond Public Schools." Richmond Public Schools, www.rvaschools.net. Accessed 16 Mar. 2026.'
      }
    ]
  },
  {
    category: 'Plan Your Trip – Useful Websites',
    sources: [
      {
        title: 'TripAdvisor – Richmond',
        url: 'https://www.tripadvisor.com/Tourism-g60893-Richmond_Virginia-Vacations.html',
        description: 'Traveler reviews for hotels, restaurants, and attractions in Richmond.',
        mla: '"TripAdvisor – Richmond, Virginia." TripAdvisor, www.tripadvisor.com/Tourism-g60893-Richmond_Virginia-Vacations.html. Accessed 16 Mar. 2026.'
      },
      {
        title: 'Visit Richmond VA (Official Tourism)',
        url: 'https://www.visitrichmondva.com',
        description: 'Official tourism website for Richmond with events, guides, and trip planning tools.',
        mla: '"Visit Richmond VA." Richmond Region Tourism, www.visitrichmondva.com. Accessed 16 Mar. 2026.'
      },
      {
        title: 'Expedia – Richmond Hotels',
        url: 'https://www.expedia.com/Richmond.d178293.Destination-Travel-Guides',
        description: 'Search and book hotels, flights, and rental cars for Richmond.',
        mla: '"Richmond Travel Guide." Expedia, www.expedia.com/Richmond.d178293.Destination-Travel-Guides. Accessed 16 Mar. 2026.'
      },
      {
        title: 'Airbnb – Richmond',
        url: 'https://www.airbnb.com/s/Richmond--Virginia',
        description: 'Unique stays and local experiences in Richmond neighborhoods.',
        mla: '"Richmond, Virginia Stays." Airbnb, www.airbnb.com/s/Richmond--Virginia. Accessed 16 Mar. 2026.'
      },
      {
        title: 'Yelp – Richmond',
        url: 'https://www.yelp.com/search?find_loc=Richmond%2C+VA',
        description: 'Community reviews for restaurants, bars, and local shops in Richmond.',
        mla: '"Richmond, VA Businesses." Yelp, www.yelp.com/search?find_loc=Richmond%2C+VA. Accessed 16 Mar. 2026.'
      },
      {
        title: 'Google Maps – Richmond',
        url: 'https://maps.google.com/?q=Richmond,Virginia',
        description: 'Navigate Richmond and get real-time directions to attractions.',
        mla: '"Richmond, Virginia." Google Maps, maps.google.com/?q=Richmond,Virginia. Accessed 16 Mar. 2026.'
      },
      {
        title: 'Richmond.com',
        url: 'https://www.richmond.com',
        description: 'Local news, events calendar, and community information for Richmond.',
        mla: '"Richmond.com." Richmond Times-Dispatch, www.richmond.com. Accessed 16 Mar. 2026.'
      },
      {
        title: 'GRTC Transit – Bus Routes',
        url: 'https://www.ridegrtc.com',
        description: 'Public transit route planning for Richmond city buses.',
        mla: '"GRTC Transit System." GRTC, www.ridegrtc.com. Accessed 16 Mar. 2026.'
      }
    ]
  },
  {
    category: 'Cultural Resources',
    sources: [
      {
        title: 'Virginia Museum of Fine Arts',
        url: 'https://www.vmfa.museum',
        description: 'Art and cultural information',
        mla: '"Virginia Museum of Fine Arts." Virginia Museum of Fine Arts, www.vmfa.museum. Accessed 16 Mar. 2026.'
      },
      {
        title: 'Richmond Symphony',
        url: 'https://richmondsymphony.com',
        description: 'Music and cultural events',
        mla: '"Richmond Symphony." Richmond Symphony, richmondsymphony.com. Accessed 16 Mar. 2026.'
      }
    ]
  }
];

export default function Citations() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/11/19/21/10/knowledge-1052010_1280.jpg)' }}
        >
          <div className="absolute inset-0 bg-[#1e3a5f]/80" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">Sources & References</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">Citations</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              All images and references used throughout Richmond Revealed, cited in MLA format.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 leading-relaxed text-lg">
            Richmond Revealed draws from trusted sources including historical archives, official government resources,
            cultural institutions, local tourism organizations, and free-to-use image platforms. All images and
            references are cited below in MLA format, organized by page.
          </p>
        </div>
      </section>

      {/* Image Citations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center space-x-2 mb-2">
              <Image className="w-6 h-6 text-[#a63d2f]" />
              <h2 className="font-display text-3xl text-[#1e3a5f] font-bold">Image Citations</h2>
            </div>
            <p className="text-gray-500 text-sm mt-1">Listed in order by page, with direct image links and MLA format.</p>
          </motion.div>

          <div className="space-y-14">
            {imageCitations.map((section, sIdx) => (
              <motion.div
                key={section.page}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sIdx * 0.05 }}
              >
                <h3 className="font-display text-xl text-[#a63d2f] font-semibold mb-5 pb-2 border-b border-gray-200">
                  {section.page}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.number} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                      <div className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {item.number}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-[#1e3a5f] mb-1">{item.location}</p>
                          <p className="text-xs text-gray-500 mb-1">Source: <span className="text-gray-700">{item.source}</span> &nbsp;|&nbsp; Credit: <span className="text-gray-700">{item.photographer}</span></p>
                          <div className="mt-2 p-3 bg-white rounded-lg border border-gray-200">
                            <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wide">MLA Citation:</p>
                            <p className="text-xs text-gray-700 italic leading-relaxed">{item.mla}</p>
                          </div>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-2 text-xs text-[#2d7d7d] hover:text-[#a63d2f] transition-colors break-all"
                          >
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                            {item.url}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* License Note */}
          <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl space-y-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold">Unsplash:</span> All photos are released under the Unsplash License, free to use for any purpose.
              Learn more at <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer" className="text-[#2d7d7d] hover:underline">unsplash.com/license</a>
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold">Pixabay:</span> All images are released under the Pixabay License, safe to use without attribution.
              Learn more at <a href="https://pixabay.com/service/terms/" target="_blank" rel="noopener noreferrer" className="text-[#2d7d7d] hover:underline">pixabay.com/service/terms</a>
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold">OpenStreetMap:</span> Map data © OpenStreetMap contributors, available under the Open Database License.
              Learn more at <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="text-[#2d7d7d] hover:underline">openstreetmap.org/copyright</a>
            </p>
          </div>
        </div>
      </section>

      {/* Text / Content Citations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="flex items-center space-x-2 mb-2">
              <BookOpen className="w-6 h-6 text-[#a63d2f]" />
              <h2 className="font-display text-3xl text-[#1e3a5f] font-bold">Content & Research Citations</h2>
            </div>
          </motion.div>

          <div className="space-y-12">
            {textCitations.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-display text-2xl text-[#1e3a5f] font-bold mb-6">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.sources.map((source, sourceIndex) => (
                    <div key={sourceIndex} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between group">
                        <div className="flex-1">
                          <h4 className="font-display text-lg text-[#1e3a5f] font-semibold mb-2 group-hover:text-[#a63d2f] transition-colors">
                            {source.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-3">{source.description}</p>
                          <p className="text-[#2d7d7d] text-xs break-all mb-3">{source.url}</p>
                          <div className="pt-3 border-t border-gray-200">
                            <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wide">MLA Citation:</p>
                            <p className="text-xs text-gray-700 italic">{source.mla}</p>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#a63d2f] transition-colors flex-shrink-0 ml-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}