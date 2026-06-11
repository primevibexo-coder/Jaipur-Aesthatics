/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Treatment, BeforeAfterItem, Testimonial, FAQItem, GalleryItem, DoctorProfile, ClinicInfo } from "./types";

export const CLINIC_INFO: ClinicInfo = {
  name: "Jaipur Aesthetics Clinic",
  address: "Premium Wing, 3rd Floor, Crown Galleria, Janpath, C-Scheme, Jaipur, Rajasthan - 302001",
  phone: "+91 91160 55700",
  whatsapp: "+91 91160 55700",
  email: "concierge@jaipuraesthetics.com",
  workingHours: [
    { days: "Monday - Saturday", hours: "10:30 AM - 07:30 PM" },
    { days: "Sunday", hours: "11:00 AM - 04:00 PM (By Prior Appointment)" }
  ],
  socialLinks: [
    { platform: "Instagram", url: "https://instagram.com/jaipuraesthetics" },
    { platform: "Facebook", url: "https://facebook.com/jaipuraesthetics" },
    { platform: "YouTube", url: "https://youtube.com/jaipuraesthetics" }
  ],
  locationCoords: { lat: 26.915, lng: 75.801 } // Central C-Scheme
};

export const DOCTOR_PROFILE: DoctorProfile = {
  name: "Dr. Meera Vasudevan",
  title: "Founder & Chief Medical Director",
  biography: "Dr. Meera Vasudevan is an internationally acclaimed board-certified Aesthetic Dermatologist and Hair Transplant Specialist. With over 14 years of clinical experience, she graduated with highest honors from the prestigious All India Institute of Medical Sciences (AIIMS, New Delhi), and subsequently completed her advanced Fellowship in Aesthetic Medicine at Harley Street, London. Known for her scientific precision and elegant artistic touch, Dr. Meera believes in enhancing natural contours and cultivating luminous, healthy skin that radiates confidence.",
  experienceYears: 14,
  qualifications: [
    "MD - Dermatology, Venereology & Leprosy (AIIMS, New Delhi)",
    "MBBS (Gold Medalist, SMS Medical College, Jaipur)",
    "Fellowship in Advanced Aesthetic Medicine (Harley Street, London, UK)",
    "Board Certification in Anti-Aging Medicine (WOSAM, Paris)"
  ],
  memberships: [
    "Member of American Academy of Aesthetic Medicine (AAAM)",
    "Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)",
    "International Society of Hair Restoration Surgery (ISHRS)",
    "Cosmetic Dermatology Society of India (CDSI)"
  ],
  certifications: [
    "Advanced Botox & Facial Sculpting Mastery - Allergan Medical Institute",
    "Non-Surgical Face lifting (Thread Lifts) Specialist Board - Seoul, South Korea",
    "Expert Panelist for Laser and Light-based Technologies - Munich, Germany"
  ],
  awards: [
    "Aesthetic Dermatologist of the Year - National Healthcare Excellence Awards (2025)",
    "Best Skin Care & Laser Specialist in Rajasthan - Golden Gladrags Awards (2024)",
    "Gold Medal for Clinical Excellence in Dermatology (AIIMS)"
  ],
  philosophy: "I approach aesthetic medicine as an elegant marriage between medical science and sculptural art. True beauty lies in balance, harmony, and proportion. My goal is never to change how you look, but to restore and amplify your inherent, natural beauty so that you always step out as the most vibrant version of yourself.",
  timeline: [
    {
      year: "2010",
      title: "Academic Gold Standard",
      description: "Graduated with SMS Medical College Gold Medal and stood 1st in the Northern India Medical Residency Selection."
    },
    {
      year: "2014",
      title: "Residency & Specialization",
      description: "Completed MD in Dermatology at AIIMS, New Delhi, conducting landmark research on skin-barrier repair science."
    },
    {
      year: "2016",
      title: "European Fellowship & International Mastery",
      description: "Relocated to London for an elite Fellowship in Aesthetic Medicine, training directly under global Harley Street masters."
    },
    {
      year: "2019",
      title: "Establishment of Jaipur Aesthetics",
      description: "Founded the Jaipur Aesthetics Clinic in C-Scheme to deliver a world-class, custom-curated, boutique medical experience in Rajasthan."
    },
    {
      year: "2025",
      title: "Global Recognition",
      description: "Received 'Aesthetic Dermatologist of the Year' and spoke at the International IMCAS Congress in Paris."
    }
  ],
  speakingEngagements: [
    "Speaker on 'Artistic Facial Harmonization using Hydrated Cohesive Fillers' - IMCAS Paris (2025)",
    "Keynote Speaker at CDSI Annual Conference: 'The Evolution of Non-Thermal Lasers in Indian Skin Types' (2024)",
    "Master Class Instructor at Clinical Dermatology Summit - New Delhi (2023)"
  ]
};

export const TREATMENTS: Treatment[] = [
  {
    id: "botox",
    name: "Luxury Wrinkle Relaxers (Botox)",
    category: "injectables",
    iconName: "Sparkles",
    shortDesc: "Reclaim smooth, youthful contours with premium wrinkle-relaxing micro-injections administered with master precision.",
    longDesc: "Our medical-grade Botox treatments target active dynamic wrinkles (crow's feet, forehead furrows, frown lines) using top-tier Allergan formulations. Adhering to the 'natural look' philosophy, Dr. Meera sculpts facial vectors to soften lines while preserving expressive, authentic emotion.",
    benefits: [
      "Visibly softens forehead lines, frown lines, and crow's feet",
      "Prevents static deep-crease formation over time",
      "Refines jawline contour (Masseter Botox / Slimming)",
      "Zero downtime, virtually painless, and results in 3-7 days",
      "Maintains natural facial expressions without 'frozen' look"
    ],
    procedure: [
      "In-depth facial muscle and skin elasticity analysis",
      "Precise markings of hyper-kinetic muscle points",
      "Application of medical-grade local numbing cream",
      "High-precision micro-injections using ultra-fine German needles",
      "Post-procedure soothing cooling mask and application of protective barrier"
    ],
    recovery: "No major downtime. Slight redness at injection sites resolving in 30 minutes. Resume active work immediately; avoid vigorous exercise for 24 hours.",
    duration: "15 to 30 minutes",
    sessionsRequired: "1 session (Resubmission / touch-up review included at 14 days; results last 4-6 months)"
  },
  {
    id: "fillers",
    name: "Dermal Fillers & Facial Sculpting",
    category: "injectables",
    iconName: "Eye",
    shortDesc: "Restore youthful volume, plump pristine lips, and define structural cheek and jaw lines with elite hyaluronic acid fillers.",
    longDesc: "Using luxury-class hyaluronic acid gels (Juvederm, Restylane), Dr. Meera meticulously replenishes volume loss in under-eye hollows, enhances flat cheeks, sculpts razor-sharp jawlines, and crafts soft, hydrated luxury lips. Every treatment honors correct facial proportions for seamless results.",
    benefits: [
      "Instantly fills tear troughs (under-eye hollows)",
      "Restores volume and architecture to flat or sagging cheeks",
      "Defines a sharp, elegant jawline and chin projection",
      "Plumps lips with precise hydration and symmetrical volume",
      "Instant, long-lasting results up to 12-18 months"
    ],
    procedure: [
      "Dimensional facial assessment and Golden Ratio mapping",
      "Selection of specific filler viscosity for customized structural layers",
      "Local block anesthesia or high-potency numbing cream",
      "Expert cannula insertion to maximize safety and minimize bruising",
      "Precise volumetric molding to ensure absolute smoothness"
    ],
    recovery: "Minimal swelling or minor bruising for 2-3 days, easily concealable. Results are immediate and stabilize completely within 7 days.",
    duration: "30 to 45 minutes",
    sessionsRequired: "1 session (Results last between 12 to 18 months depending on the area in target)"
  },
  {
    id: "laser-hair",
    name: "Elite Laser Hair Reduction",
    category: "laser",
    iconName: "Zap",
    shortDesc: "Enjoy permanently smooth, flawless skin with our gold-standard Triple Wavelength Laser technology safely optimized for Indian skin.",
    longDesc: "Bid farewell to painful waxing and shaving. Outfitted with the internationally acclaimed US-FDA approved Triple-Wavelength Soprano Titanium ice laser, we deliver super-fast, completely pain-free hair reduction. The cooling sapphire tip maintains skin comfort while effectively destroying follicles.",
    benefits: [
      "Up to 90% permanent reduction in unwanted hair",
      "Pain-free treatment with ice-cooling contact technology",
      "Highly effective on coarse hair as well as fine, soft hair",
      "Eliminates razor bumps, painful ingrown hair, and skin darkening",
      "Saves thousands of hours and expenses over standard lifetime grooming"
    ],
    procedure: [
      "Skin type diagnostic and personalized wavelength parameter configuration",
      "Cleansing and clean close-shaving of the targeted region",
      "Application of cold transmission gel to act as a barrier",
      "Continuous-glide treatment sweeps over the area",
      "Application of calming aloe extract and high-protection SPF 50 sunscreen"
    ],
    recovery: "Zero downtime. Avoid direct sun exposure and apply broad-spectrum sunscreen. Light redness fades completely within 1-2 hours.",
    duration: "15 to 90 minutes (depends on region)",
    sessionsRequired: "6 to 8 sessions spaced 4-6 weeks apart for impeccable permanent results"
  },
  {
    id: "hydrafacial",
    name: "Luxury HydraFacial MD Elite",
    category: "facial",
    iconName: "Droplet",
    shortDesc: "The ultimate 5-in-1 medical super-facial designed to cleanse, exfoliate, extract impurities, and infuse rich antioxidants for red-carpet radiance.",
    longDesc: "This is not an ordinary spa service. Our authentic US-made HydraFacial MD clinical system utilizes patented vortex-fusion technology to deeply extract pores, peel away cellular debris, and hydrate the skin with high-dose customized cocktails of peptides, hyaluronic acid, and Vitamin C.",
    benefits: [
      "Deeply evacuates blackheads and congested skin pores",
      "Brightens uneven tone and softens textured dry skin",
      "Fades fine dehydration lines, revealing a glassy, red-carpet glow",
      "Completely customized booster serums targeting active acne or pigmentation",
      "Unbelievably refreshing, soothing, and relaxing process"
    ],
    procedure: [
      "Vortex-exfoliation to reveal pristine, new skin layers",
      "Mild salicylic and glycolic non-irritant chemical peeling",
      "Automated painless vortex-suction extraction of stubborn blackheads",
      "High-dose peptide and custom booster serum dermal infusion",
      "Integrated LED Red/Blue Light stimulation therapy to boost collagen"
    ],
    recovery: "Zero downtime. Instant, luminous 'glass-skin' glow that peaks at 24-48 hours. Excellent before major weddings, galas, or corporate events.",
    duration: "45 to 60 minutes",
    sessionsRequired: "Once a month recommended for maintaining permanent immaculate skin health"
  },
  {
    id: "prp-hair",
    name: "Autologous PRP Hair Restoration",
    category: "hair",
    iconName: "Shield",
    shortDesc: "Combat hair thinning and pattern baldness naturally using your own growth factors to supercharge dormant scalp follicles.",
    longDesc: "Harnessing the pure healing mechanisms of your body, our Platelet-Rich Plasma (PRP) therapy isolates elite growth factors from your blood. Formulated in high-speed Swiss-certified centrifuges, these rich platelets are micro-infused into the scalp, reversing thinning and accelerating robust hair growth.",
    benefits: [
      "Substantially reduces active, stressful hair fall within 3 sessions",
      "Re-energizes dormant follicular units, multiplying hair density",
      "Thickens individual hair shafts, creating visible overall volume",
      "100% natural, bio-safe treatment using your body's own fluid structures",
      "Safe and standard alternative or adjunct to hair transplant surgery"
    ],
    procedure: [
      "Comfortable extraction of 10ml of autologous blood",
      "Double-spin separation in high-precision Swiss-made centrifugation tubes",
      "Activation of the platelet concentrate to release maximum growth factors",
      "Numbing of the scalp area and micro-infusion with pinpoint precision",
      "Low-level Cold Laser scalp stimulation to accelerate blood circulation"
    ],
    recovery: "Mild scalp tenderness or tightness for 24 hours. Normal hair washing can be safely resumed the following morning.",
    duration: "45 to 60 minutes",
    sessionsRequired: "4 to 6 sessions spaced 3-4 weeks apart for optimal density restoration"
  },
  {
    id: "microneedling",
    name: "Collagen Induction & Scar Revision",
    category: "skin",
    iconName: "Layers",
    shortDesc: "Erase acne scars, stretch marks, and enlarged pores with premium medical microneedling powered by targeted growth factor infusions.",
    longDesc: "Using the FDA-cleared Dermapen 4 system, we generate millions of micro-channels with electronic precision. This triggers the skin's self-healing biological cascade, replacing coarse scar tissue with fresh, organized, supple collagen and elastic fibers.",
    benefits: [
      "Significantly flattens deep pitted acne scars (boxcar, rolling, ice-pick)",
      "Refines skin texture, shrinking enlarged pores",
      "Fades fine wrinkles and brightens dark stubborn pigmentation",
      "Boosts topical skincare absorption by up to 3000%",
      "Safe for all skin photo-types without risk of post-inflammatory marks"
    ],
    procedure: [
      "Rigorous skin sterilization and clinical photography mapping",
      "Application of medical-grade high-concentration topical numbing cream for 45 mins",
      "Calibrated fractional micro-needling utilizing customized needle depths",
      "Simultaneous infusion of medical-grade rejuvenating serums (Panthenol & Hyaluronic)",
      "Application of clinical cooling zinc mask to soothe post-procedure warmth"
    ],
    recovery: "Mild sunburn-like redness for 24-48 hours, followed by subtle micro-peeling. Exquisite, fresh new skin texture emerges at day 5.",
    duration: "60 minutes",
    sessionsRequired: "4 to 6 sessions spaced 4 weeks apart depending on the severity of scars"
  },
  {
    id: "peels",
    name: "Luxury Chemical Resurfacing Peels",
    category: "skin",
    iconName: "Workflow",
    shortDesc: "Reveal flawless, bright, and spot-free skin with our specialized medical-grade peels targeting deep pigment, tan, and acne.",
    longDesc: "Our luxury peels go beyond simple superficial acids. We utilize advanced dermatological cocktails (Spanish Yellow Peel, TCA, Mandelic, Jessner Peels) carefully calibrated to treat skin concerns from melasma, dark sun tan, active acne outbreaks, to post-acne dark marks securely.",
    benefits: [
      "Visibly breaks down stubborn epidermal pigment and melasma",
      "Purges active acne lesions and dries out sebaceous micro-clogs",
      "Dramatically brightens dull, fatigued skin affected by urban pollution",
      "Stimulates active cellular turnover for global skin brightness",
      "Perfect quick rejuvenation treat for dull skin"
    ],
    procedure: [
      "Double cleansing and skin degreasing using botanical extracts",
      "Delicate protective barrier application on sensitive areas (corners of nose, eyes)",
      "Layered application of the targeted medical chemical peel solution",
      "Monitored incubation and real-time observation of skin reaction",
      "Neutralization and final application of ultra-soothing recovery lipid cream"
    ],
    recovery: "Depends on peel depth (no peeling to 3 days of light flaking). Strict sun avoidance and moisturizer application are mandatory.",
    duration: "30 minutes",
    sessionsRequired: "3 to 5 sessions spaced 15-21 days apart for pristine glass-like radiance"
  },
  {
    id: "anti-aging",
    name: "Non-Surgical Multi-Layer Lift",
    category: "anti-aging",
    iconName: "TrendingUp",
    shortDesc: "Reverse the clock naturally utilizing high-intensity HIFU and Thread lift protocols that tighten skin and reposition sagging tissue.",
    longDesc: "Employing micro-focused Ultrasound (HIFU Ultra-Matrix) and premium PDO cog threads, we deliver customized full-face and neck structural lifts. This clinical synergy repositions descended cheek fat pads, tightens a soft saggy double chin, and defines the jaw area, entirely without surgery.",
    benefits: [
      "Surgically comparable skin tightening without scalpel incisions",
      "Repositions sagging jowls and heavy double chins",
      "Sharpens facial profiles, raising eyebrows and lifting nasolabial folds",
      "Stimulates massive deep-dermal structural collagen synthesis",
      "Natural results with an organic, youthful, refreshed posture"
    ],
    procedure: [
      "Deep contour and vector planning with clinical photos",
      "Targeted local block or superficial numbing",
      "Application of conduct gel (for HIFU) or sterile vector guides (for Threads)",
      "High-focus thermal stimulation or insertion of biocompatible threads according to planned vectors",
      "Infusion of cold calming recovery minerals"
    ],
    recovery: "HIFU: Zero downtime, slight internal soreness for 4-5 days. Threads: 5-7 days of light swelling, restricted facial stretching for 2 weeks.",
    duration: "45 to 90 minutes",
    sessionsRequired: "HIFU: 1 session annually. Threads: 1 session (Lasts up to 2 years)"
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "ba-1",
    title: "Tear Trough Filler & Lip Plumping",
    category: "facial",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600", // Elegant portrait
    afterImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=600", // radiant beautiful skin portrait
    description: "Correction of sunken dark under-eye hollows and custom symmetrical enhancement of the lips using elite Juvederm Volbella fillers.",
    concern: "Deep tired tear troughs & asymmetric thin lips",
    timeframe: "1 Session (Post 2 Weeks)"
  },
  {
    id: "ba-2",
    title: "Acne Scar Revision with Microneedling",
    category: "skin",
    beforeImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=600",
    afterImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
    description: "Combination treatment of fractional Dermapen micro-needling integrated with Spanish Yellow Peels for post-acne severe pitted scars.",
    concern: "Severe boxcar acne scars and dark spots",
    timeframe: "4 Sessions (Over 4 Months)"
  },
  {
    id: "ba-3",
    title: "Non-Surgical Jawline & Cheek Lift",
    category: "anti-aging",
    beforeImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
    afterImage: "https://images.unsplash.com/photo-1562124638-724e13052daf?auto=format&fit=crop&q=80&w=600",
    description: "Full face tightening using Ultra-Matrix HIFU combined with custom sag-alleviating PDO Threads to establish a youthful elegant facial V-angle.",
    concern: "Loss of cheek volume, heavy jowls & neck sagging",
    timeframe: "1 Session (Post 1 Month)"
  },
  {
    id: "ba-4",
    title: "Androgenetic Alopecia Restoration",
    category: "hair",
    beforeImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    afterImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    description: "Swiss double-spin platelet rich plasma infusions delivering vital growth factors to thinning crowns and recessional vertexes.",
    concern: "Male model scalp vertex hair thinning (Grade 3)",
    timeframe: "5 Sessions (Over 5 Months)"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Ridhima Sen",
    location: "Malviya Nagar, Jaipur",
    treatment: "Luxury HydraFacial & Botox Combo",
    rating: 5,
    text: "Jaipur Aesthetics Clinic is hands down the most luxurious clinic I have ever visited. Dr. Meera is extremely patient and does not push for extra treatments. She gave me my dream natural looking results. My forehead feels beautifully smooth, but I can still move my eyebrows naturally! The glowing skin from the HydraFacial is just pristine.",
    isGoogleVerified: true,
    avatarText: "RS"
  },
  {
    id: "t-2",
    name: "Abhishek Shekhawat",
    location: "C-Scheme, Jaipur",
    treatment: "Autologous Hair PRP",
    rating: 5,
    text: "I was losing hair rapidly and felt quite anxious. After a detailed consultation with Dr. Meera, she suggested custom PRP and a care plan. The results after 4 sessions are unbelievable. My hair shedding has completely stopped, and the crown feels notably thicker. The clinic infrastructure is world-class, clean, and highly secure.",
    isGoogleVerified: true,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Mock elegant streaming video
    avatarText: "AS"
  },
  {
    id: "t-3",
    name: "Dr. Priyal Bhatia",
    location: "Vaishali Nagar, Jaipur",
    treatment: "Dermal Fillers (Tear Troughs)",
    rating: 5,
    text: "As a doctor myself, I am extremely particular about hygiene, clinical standards, and injector skills. Dr. Meera's understanding of facial anatomy is impeccable. She corrected my deep dark circles with tear-trough fillers. The result is completely smooth and natural. I look so rested. Truly outstanding work!",
    isGoogleVerified: true,
    avatarText: "PB"
  },
  {
    id: "t-4",
    name: "Kavita Purohit",
    location: "Civil Lines, Jaipur",
    treatment: "Anti-Aging HIFU Tightening",
    rating: 5,
    text: "The absolute pinnacle of luxury skincare in Rajasthan. The staff treats you like family, serving gourmet tea, and the treatment rooms are more comfortable than five-star resort spas. The HIFU lift did absolute wonders for my jawline. I look at least 6-8 years younger, completely non-surgically!",
    isGoogleVerified: true,
    avatarText: "KP"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What should I expect during my first aesthetic consultation?",
    answer: "During your initial consultation, Dr. Meera conducts a comprehensive 3D clinical evaluation. She meticulously reviews your skin health, facial structure, medical history, lifestyle factors, and specific cosmetic aspirations. Together, you will co-create a tailored, stage-wise treatment road map. We believe in organic enhancement and never rush or over-recommend procedures.",
    category: "consultations"
  },
  {
    id: "faq-2",
    question: "Are dermal fillers and Botox injections painful?",
    answer: "Most patients describe the discomfort as a minor prick, comparable to a tiny bug bite or pinprick. We employ powerful medical-grade topical numbing creams (applied 45 minutes prior) and use ultra-fine German micro-needles to ensure relative painlessness. Additionally, Dr. Meera is certified in advanced comfort-infusion techniques utilizing vibrating distraction devices that block nerve senses.",
    category: "safety"
  },
  {
    id: "faq-3",
    question: "How long is the typical recovery time (downtime)?",
    answer: "With our advanced, minimally invasive technologies, downtime is nearly non-existent for 90% of our procedures. Facials, laser hair removal, and chemical peels have a zero-downtime 'lunchtime' profile. Injectables (Botox/Fillers) might cause minor redness or micro-swelling that clears within a few hours to 3 days, easily concealed with light tinted sunscreen.",
    category: "recovery"
  },
  {
    id: "faq-4",
    question: "Do you offer customizable financing or payment packages?",
    answer: "Yes. Our boutique philosophy centers on transparent healthcare. We offer beautifully structured treatment plans that can be paid per session or through interest-free (0% EMI) financing options powered by major banking partners. All pricing maps, medical material specs, and treatment cycles will be provided upfront with no hidden surcharges.",
    category: "pricing"
  },
  {
    id: "faq-5",
    question: "How safe are clinical laser procedures on Indian skin?",
    answer: "Indian skin has higher concentrations of melanin, making safety a chief priority. Standard low-cost aesthetic centers use generic lasers that carry risk of hyperpigmentation. At Jaipur Aesthetics, we use exclusively gold-standard US-FDA approved technologies like the Soprano Titanium, which features multi-laser wavelengths and active real-time cooling. This guarantees flawless hair and pigmentation results.",
    category: "safety"
  },
  {
    id: "faq-6",
    question: "How soon do results become visible after anti-aging treatments?",
    answer: "This depends heavily on the chosen treatment modality. HydraFacial MD offers an instantaneous glass-like glow. Botox results manifest within 3 to 7 days, whereas Dermal Fillers deliver instantaneous structural volume changes. Collagen-inducers like HIFU, Microneedling, and PRP kickstart deep cellular healing, with cumulative beautiful upgrades manifesting over 4 to 8 weeks.",
    category: "treatments"
  },
  {
    id: "faq-7",
    question: "What is your clinical protocol for post-procedure aftercare?",
    answer: "Every single patient is provided with a curated, complimentary Aftercare Kit tailored to their specific treatment. This includes clean, dermatologically verified soothing creams, premium physical mineral sunscreens, and a crystal-clear checklist of do's and don'ts. Our clinical concierge service is available round-the-clock via a dedicated VIP WhatsApp channel.",
    category: "aftercare"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Luxury Lounge & Concierge Desk",
    category: "interiors",
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    alt: "Luxurious ivory reception lounge with warm gold accents and dynamic artistic lighting"
  },
  {
    id: "g-2",
    title: "Premium Laser & Therapy Suite",
    category: "treatment-rooms",
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    alt: "Stunning clinical therapy room outfitted with premium leather beds and US-FDA approved equipment"
  },
  {
    id: "g-3",
    title: "Soprano Titanium Ice Laser Station",
    category: "equipment",
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    alt: "US-FDA approved gold-standard aesthetic hair reduction equipment"
  },
  {
    id: "g-4",
    title: "Dr. Meera in Consultation with Patient",
    category: "interactions",
    url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    alt: "Dr. Meera Vasudevan mapping treatment vectors on an aesthetic patient"
  },
  {
    id: "g-5",
    title: "HydraFacial Vortex Infusion Procedure",
    category: "journey",
    url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    alt: "Boutique facial transformation showing clinical exfoliation and serum delivery"
  },
  {
    id: "g-6",
    title: "Private Consultation Suite",
    category: "interiors",
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    alt: "Soothing clinical consulting room designed with acoustic panelling and warm, premium lighting"
  }
];
