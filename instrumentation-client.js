import posthog from 'posthog-js'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2025-05-24',
    person_profiles: 'identified_only',
    capture_pageview: false,
    capture_pageleave: true,
    loaded: function(posthog) {
        // Identify user with portfolio information
        const userEmail = 'lets@meetmushfiq.com';
        if (userEmail) {
            posthog.identify(userEmail, {
                email: userEmail,
                name: 'Mushfiqur Rahaman',
                role: 'Technical Product Manager',
                location: 'Dhaka, Bangladesh',
                website: 'https://meetmushfiq.com',
                expertise: ['Agritech', 'Aquatech', 'Energy Efficiency', 'IoT', 'SaaS'],
                experience_years: 5,
                education: 'B.Sc Computer Science & Engineering',
                certifications: ['Big Data & Data Science', 'Management Professionals', 'Mobile App Development']
            });
        }
    }
});
