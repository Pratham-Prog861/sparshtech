import Vision from "@/components/Vision";
import Team from "@/components/Team";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About SparshTech
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of innovators, creators, and problem solvers dedicated
            to transforming the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
              alt="Team meeting"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded in 2024, SparshTech began with a simple mission: to make
                high-quality technology accessible to businesses of all sizes.
                What started as a small group of passionate developers has grown
                into a full-service digital agency.
              </p>
              <p>
                Over the years, we have had the privilege of working with
                startups, enterprises, and non-profits, helping them navigate
                the complexities of the digital world. Our journey is defined by
                the success of our clients and the continuous growth of our
                team.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-secondary/20 p-8 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className="text-muted-foreground">
              We constantly explore new technologies and methodologies to
              deliver cutting-edge solutions.
            </p>
          </div>
          <div className="bg-secondary/20 p-8 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-4">Integrity</h3>
            <p className="text-muted-foreground">
              We believe in transparent communication and honest business
              practices in everything we do.
            </p>
          </div>
          <div className="bg-secondary/20 p-8 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-4">Excellence</h3>
            <p className="text-muted-foreground">
              We are committed to delivering the highest quality work, paying
              attention to every detail.
            </p>
          </div>
        </div>

        <Vision />
        <Team />
      </div>
    </main>
  );
}
