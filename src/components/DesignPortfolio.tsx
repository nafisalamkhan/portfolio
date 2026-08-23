import { ExternalLink, Eye } from 'lucide-react';
import { MagnificLogo } from '@/components/ui/logos';
import vintageHotrodImage from '@/assets/vintage-hotrod-design.jpg';
import bookMockupImage from '@/assets/book-mockup.jpg';
import neonTextImage from '@/assets/neon-text-effect.png';
import vanlifeTshirtImage from '@/assets/vanlife-tshirt.jpg';
import crimeSceneImage from '@/assets/crime-scene-illustration.jpg';
import specialOfferImage from '@/assets/special-offer-text.jpg';

const designs = [
  {
    title: 'Two Hardcover Books Mockup',
    tools: ['Photoshop'],
    image: bookMockupImage,
    link: 'https://www.magnific.com/author/nafisalamkhan',
  },
  {
    title: 'Neon Light Editable Text Effect',
    tools: ['Photoshop'],
    image: neonTextImage,
    link: 'https://www.magnific.com/author/nafisalamkhan',
  },
  {
    title: 'Van Life Beach T-Shirt Design',
    tools: ['Adobe Illustrator'],
    image: vanlifeTshirtImage,
    link: 'https://www.magnific.com/author/nafisalamkhan',
  },
  {
    title: 'Crime Scene Tape Photo',
    tools: ['Photoshop', 'AI'],
    image: crimeSceneImage,
    link: 'https://www.magnific.com/author/nafisalamkhan',
  },
  {
    title: 'Special Offer Text Effect',
    tools: ['Photoshop'],
    image: specialOfferImage,
    link: 'https://www.magnific.com/author/nafisalamkhan',
  },
  {
    title: 'Vintage Hotrod T-Shirt Design',
    tools: ['Adobe Illustrator'],
    image: vintageHotrodImage,
    link: 'https://www.magnific.com/author/nafisalamkhan',
  },
];

const DesignCard = ({ design, index }: { design: typeof designs[0]; index: number }) => {
  return (
    <div
      className="card overflow-hidden group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Design Preview */}
      <div className="aspect-[4/3] relative overflow-hidden bg-[var(--muted)]">
        <img
          src={design.image}
          alt={design.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="heading-md group-hover:text-[var(--link)] transition-colors">
          {design.title}
        </h3>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {design.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-xs font-medium bg-[var(--muted)] text-body rounded-[6px] border border-hairline"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={design.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 body-md font-[500] text-[var(--link)] hover:text-[var(--link-deep)] transition-colors"
        >
          <MagnificLogo className="w-4 h-4" />
          View on Magnific
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export const DesignPortfolio = () => {
  return (
    <section id="designs" className="py-[96px] lg:py-[128px] relative">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-[48px]">
          <div className="inline-flex items-center gap-2 bg-[var(--muted)] border border-hairline rounded-[6px] px-4 py-2 mb-6 mx-auto max-w-fit">
            <span className="w-2 h-2 bg-[var(--gradient-preview-start)] rounded-full" />
            <span className="label-sm text-ink">Creative Work</span>
          </div>
          <h2 className="heading-lg mb-4">
            Creative Design <span className="text-gradient">& Assets</span>
          </h2>
          <p className="body-lg text-body mx-auto max-w-xl">
            Explore my collection of design assets on Magnific with{' '}
            <span className="text-ink font-[500]">200+ assets</span> and{' '}
            <span className="text-ink font-[500]">8.3K+ downloads</span>
          </p>
        </div>

        {/* Designs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, index) => (
            <DesignCard key={design.title} design={design} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-[48px]">
          <a
            href="https://www.magnific.com/author/nafisalamkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <MagnificLogo className="w-5 h-5" />
            View All Assets on Magnific
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};