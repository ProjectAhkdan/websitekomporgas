import Banner from "@/components/benner";

const HeroContact = () => {
    return (
        <div>
            <Banner 
                title="Detail Kontak"
                description="Temukan informasi kontak dan lokasi kami di bawah ini."
                backgroundImage="/assets/maps.jpg"
                overlayOpacity="bg-black/60"
                textAlignment="text-left" 
                textColor="text-white"
                height="h-[50vh]" 
            />
        </div>
    );
};

export default HeroContact;
