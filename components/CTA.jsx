export default function CTA() {
  return (
    <section id="cta" className="w-full px-6">

      <div className="mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          {/* LEFT */}
          <div className="w-full">
            <iframe
              src="https://square.site/appointments/buyer/widget/2pefuflo2hw9e3/LCTHN7ABYT9JV"
              className="w-full h-[500px]"
              scrolling="no"
            />
          </div>

          {/* RIGHT */}
          <div className="md:p-[40px]">

            <h2 className="text-[42px] mb-[20px]">
              Ready When You Are.
            </h2>

            <p className="text-[18px] text-[#555] max-w-[400px]">
              Schedule your service online — no pressure, no surprises.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}