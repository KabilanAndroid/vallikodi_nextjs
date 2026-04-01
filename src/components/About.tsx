const About = () => {
    return (
        <div className="flex bg-white p-10 gap-10" >
            <div className="flex flex-1 w-1/2 relative">
                <img className="h-auto max-w-5/6" src={"http://172.21.4.102/vallikodi/frontend/img/about1.png"} ></img>
                <img className="absolute h-auto w-1/2 -bottom-20 right-10" src={"	http://172.21.4.102/vallikodi/frontend/img/about2.png"} ></img>
            </div>
            <div className="flex flex-1 w-1/2 flex-col" >
                <p className="text-orange-bold mb-6 text-6xl text-orange-600">About Vallikodi</p>
                <h2>The Most Trusted Vanniar (Vallikodi) Matrimony</h2>
                <p className="text-gray text-lg mt-4 font-">Vallikodi Vanniarkula Shathriyar Thirumana Thagaval Maiyam is a better way to arrange marriages amongst people from different parts of Tamilnadu as it allows the union of two compatible Tamil individuals as well as their families from the same community. Since every Tamil community has its unique marital customs and traditions, preference is given to finding a partner who shares a similar cultural background.

                    You can find the life partner of your choice as per both your and your family's preferences. In Vallikodi vanniar matrimony, compatibility between a bride and groom is measured not only through community, religious, and astrological parameters but also through factors like education, profession, personality, and more. Looking for a bride or groom in cities like Pondicherry, villupuram, Tiruvannamlai, kanchipuram, Chennai, or anywhere else in Tamilnadu?
                </p>
            </div>
        </div>
    )
}

export default About;