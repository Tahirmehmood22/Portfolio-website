const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="professional-card p-8 md:p-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I am a passionate <span className="text-primary font-semibold">Front-End Developer</span> with 
              a strong dedication to improving my knowledge and skills in modern web technologies. 
              Currently pursuing my diploma in Front-End Development at Hyperisland Stockholm, 
              I combine my technical expertise with a background in banking and customer service 
              to create user-focused digital experiences.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Professional Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My journey from banking to tech represents my commitment to continuous learning 
                  and adaptation. With experience in customer service and a Master's in Commerce, 
                  I bring a unique perspective to user experience and business requirements.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Current Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm specializing in React development and modern JavaScript frameworks, 
                  while also exploring backend technologies like Node.js and MongoDB. 
                  My goal is to become a well-rounded full-stack developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;