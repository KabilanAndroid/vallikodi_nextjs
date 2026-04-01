const Footer = () => {
  return (
    <div className="w-full bg-brand-secondary rounded-t-4xl">
  <div className="px-6 py-10 sm:px-12 md:px-16 lg:px-24 xl:px-32">
    <div className="grid  gap-8 sm:grid-cols-2 md:grid-cols-4">
      <div className="flex flex-col gap-2">
        <p className="text-white font-semibold mb-2">Information</p>
        <p className="text-white/80 text-sm">Home</p>
        <p className="text-white/80 text-sm">Gallery</p>
        <p className="text-white/80 text-sm">Success Stories</p>
        <p className="text-white/80 text-sm">My Vanniar</p>
        <p className="text-white/80 text-sm">Payment</p>
        <p className="text-white/80 text-sm">Contact us</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-semibold mb-2">Policies</p>
        <p className="text-white/80 text-sm">Privacy Policy</p>
        <p className="text-white/80 text-sm">Terms of Use</p>
        <p className="text-white/80 text-sm">Other Policies</p>
        <p className="text-white/80 text-sm">Refund Policy</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-semibold mb-2">Head Office</p>
        <p className="text-white/80 text-sm leading-relaxed">
          No.79, Vazhudavur Road, V.V.P Nagar,<br />
          Gounderpalayam, Puducherry,<br />
          India - 605009
        </p>
        <p className="text-white/80 text-sm">valli.vallikodi@gmail.com</p>
        <p className="text-white/80 text-sm">+91 73977 34121</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-semibold mb-2">Follow Us</p>
        <p className="text-white/80 text-sm">Facebook</p>
        <p className="text-white/80 text-sm">Instagram</p>
        <p className="text-white/80 text-sm">Twitter</p>
        <p className="text-white/80 text-sm">YouTube</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Footer;
