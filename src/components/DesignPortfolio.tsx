import { ExternalLink } from 'lucide-react';
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
    link: 'https://www.freepik.com/premium-psd/two-hardcover-books-mockup_112031370.htm',
  },
  {
    title: 'Neon Light Editable Text Effect',
    tools: ['Photoshop'],
    image: neonTextImage,
    link: 'https://www.freepik.com/premium-psd/neon-light-editable-text-effect_129836269.htm',
  },
  {
    title: 'Van Life Beach T-Shirt Design',
    tools: ['Adobe Illustrator'],
    image: vanlifeTshirtImage,
    link: 'https://www.freepik.com/premium-vector/free-vector-illustration-t-shirt-design-mini-van-beach_36639473.htm',
  },
  {
    title: 'Crime Scene Tape Photo',
    tools: ['Photoshop', 'AI'],
    image: crimeSceneImage,
    link: 'https://www.freepik.com/premium-photo/yellow-sign-that-says-scene-is-built-by-photographer_312542723.htm',
  },
  {
    title: 'Special Offer Text Effect',
    tools: ['Photoshop'],
    image: specialOfferImage,
    link: 'https://www.freepik.com/premium-psd/special-offer-text-effect-style-premium-psd_112041874.htm',
  },
  {
    title: 'Vintage Hotrod T-Shirt Design',
    tools: ['Adobe Illustrator'],
    image: vintageHotrodImage,
    link: 'https://www.freepik.com/premium-vector/free-vintage-t-shirt-design-hotrod_36639450.htm',
  },
];

export const DesignPortfolio = () => {
  return (
    <section id="designs" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-badge mb-6">
            <span className="w-2 h-2 bg-white rounded-full" />
            Creative Work
          </div>
          <h2 className="section-title">
            Creative Design <span className="text-gradient">&amp; Assets</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore my collection of design assets on Freepik with{' '}
            <span className="text-primary font-medium">150+ assets</span> and{' '}
            <span className="text-primary font-medium">5,700+ downloads</span>
          </p>
        </div>

        {/* Designs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, index) => (
            <div
              key={design.title}
              className="group glass-card overflow-hidden gradient-border transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Design Preview */}
              <div className="aspect-[4/3] relative overflow-hidden bg-muted/20">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {design.title}
                </h3>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {design.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
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
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View on Freepik
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.freepik.com/author/nafisalamkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass-button font-medium group"
          >
            View All Assets on Freepik
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
