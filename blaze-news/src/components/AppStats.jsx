const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
const date = new Date();
const thisMonth = monthNames[date.getMonth()] +' '+ date.getFullYear();

export const AppStats = () => {
  return (
    <>
    <div className="text-center w-full">
    <div className="stats shadow">
  <div className="stat place-items-center">
    <div className="stat-title">App Traffic</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">{thisMonth}</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">Active Users</div>
    <div className="stat-value text-secondary">4,200</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
</div>
    </>
  );
};
