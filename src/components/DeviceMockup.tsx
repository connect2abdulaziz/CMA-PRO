export function DeviceMockup() {
  const rows = [
    ["Address", "1247 Oakridge Ln", "319 Pyle Ln", "88 Maple Ct", "410 Birch Ave"],
    ["Status", "Subject", "Closed", "Closed", "Closed"],
    ["Sale Price", "—", "$439,000", "$455,200", "$428,500"],
    ["Sale Date", "—", "03/12/26", "02/28/26", "01/19/26"],
    ["Price / Sq Ft", "—", "$214", "$221", "$209"],
    ["Living Area", "2,040", "2,050", "2,060", "2,050"],
    ["Beds / Baths", "4 / 2.5", "4 / 2.5", "4 / 3", "3 / 2.5"],
    ["Year Built", "1998", "1996", "2001", "1994"],
    ["Lot Size", "0.21 ac", "0.19 ac", "0.24 ac", "0.18 ac"],
    ["Garage", "2 car", "2 car", "3 car", "2 car"],
  ];

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="animate-float relative z-10">
        <div className="overflow-hidden rounded-t-xl border border-navy/25 bg-[#14181f] p-2 shadow-[0_28px_60px_-20px_rgba(10,30,45,0.65)] sm:p-2.5">
          <div className="mb-2 flex items-center gap-1.5 px-1">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="ml-2 rounded bg-white/10 px-2 py-0.5 text-[9px] text-white/55">
              Comp Analysis — My CMA PRO
            </span>
          </div>

          <div className="overflow-hidden rounded-md bg-[#f7f2ea]">
            <div className="flex min-h-[280px] sm:min-h-[340px]">
              <aside className="hidden w-[92px] shrink-0 border-r border-line/80 bg-[#efe8dc] py-3 text-[8px] text-navy/70 sm:block">
                {(
                  [
                    ["Dashboard", false],
                    ["Fill Net Sheet", true],
                    ["Worksheet", false],
                    ["Reports", false],
                    ["Search CRM", false],
                  ] as const
                ).map(([label, active]) => (
                  <div
                    key={label}
                    className={`mx-1.5 mb-1 rounded px-1.5 py-1.5 leading-tight ${
                      active ? "bg-[#f4d7b8] font-semibold text-navy" : ""
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </aside>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2 border-b border-line bg-white px-2.5 py-2">
                  <p className="text-[10px] font-semibold text-navy sm:text-[11px]">Comp Analysis</p>
                  <div className="flex gap-1">
                    <span className="rounded bg-navy px-1.5 py-0.5 text-[8px] font-medium text-white">
                      + Add Comp
                    </span>
                    <span className="rounded border border-navy/15 px-1.5 py-0.5 text-[8px] text-navy/70">
                      Actions ▾
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 border-b border-line bg-white px-2.5 pt-2 text-[8px] sm:text-[9px]">
                  {["Subject Property", "Comparables", "Adjustments", "Summary"].map((tab) => (
                    <span
                      key={tab}
                      className={`pb-1.5 ${
                        tab === "Comparables"
                          ? "border-b-2 border-gold font-semibold text-navy"
                          : "text-muted"
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[420px] border-collapse text-left text-[8px] sm:text-[9px]">
                    <thead>
                      <tr className="bg-[#efe8dc] text-navy">
                        {["FEATURE", "SUBJECT", "COMP 1", "COMP 2", "COMP 3"].map((col) => (
                          <th key={col} className="px-2 py-1.5 font-semibold">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, i) => (
                        <tr key={row[0]} className={i % 2 ? "bg-white" : "bg-[#fbf8f3]"}>
                          {row.map((cell, j) => (
                            <td
                              key={`${row[0]}-${j}`}
                              className={`px-2 py-1 text-navy/80 ${j === 0 ? "font-medium text-navy" : ""}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-3 w-[86%] rounded-b-xl bg-[#2a313a] shadow-md" />
        <div className="mx-auto h-1.5 w-[28%] rounded-b-sm bg-[#3a424c]" />
      </div>

      <div className="absolute -bottom-6 right-0 z-20 w-[34%] max-w-[148px] rotate-[7deg] overflow-hidden rounded-[1.35rem] border-[3px] border-[#1c2128] bg-[#1c2128] shadow-xl sm:-bottom-2 sm:right-[-6px]">
        <div className="mx-auto mt-1.5 h-1 w-9 rounded-full bg-white/25" />
        <div className="m-1 overflow-hidden rounded-[1rem] bg-[#f7f2ea]">
          <div className="bg-navy px-2 py-1.5 text-[8px] font-semibold text-white">Comp Analysis</div>
          <div className="flex gap-1 px-2 pt-1.5 text-[7px]">
            {["Subject", "Comps", "Adj."].map((tab) => (
              <span
                key={tab}
                className={`rounded-full px-1.5 py-0.5 ${
                  tab === "Comps" ? "bg-gold text-white" : "bg-white text-navy/70"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="space-y-1.5 p-2">
            {[
              ["319 Pyle Ln", "$439,000"],
              ["88 Maple Ct", "$455,200"],
              ["410 Birch Ave", "$428,500"],
            ].map(([addr, price]) => (
              <div key={addr} className="rounded bg-white p-1.5 shadow-sm">
                <p className="text-[7px] font-medium text-navy">{addr}</p>
                <p className="text-[8px] font-semibold text-gold">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
