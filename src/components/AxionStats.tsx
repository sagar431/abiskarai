"use client";

const stats = [
  {
    value: "80%",
    label: "of inbound WhatsApp conversations automated",
  },
  {
    value: "96%",
    label: "field-extraction accuracy on documents",
  },
  {
    value: "2 wks",
    label: "typical launch timeline, brief to live",
  },
];

export function AxionStats() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-gray-200 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-3 bg-white p-6 sm:p-8 lg:p-10"
            >
              <span
                className="font-medium text-gray-900"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </span>
              <span className="text-[13px] leading-[1.5] text-gray-600 sm:text-[14px]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
