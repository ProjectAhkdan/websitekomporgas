import Banner from "@/components/benner";

const HeroAbout = () => {
  return (
    <div>
      <Banner
        title="About Jamantek"
        description="Jamantek: Jaya Mandiri Teknik"
        backgroundImage="/assets/worktimabout.jpg"
        overlayOpacity="bg-black/70"
        textAlignment="text-center"
        textColor="text-white"
        height="h-[50vh]" // Custom height
      />
    </div>
  );
};

export default HeroAbout;
