import React from "react";
import Layout from "../Layout";

const ClassScheduler = () => {
  return (
    <Layout>
      <div className="class-scheduler-container">
        {/* Embed Google Calendar code here */}
        <div style={{ textAlign: "center", margin: "20px" }}>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=johncharlesjt2003%40gmail.com&ctz=UTC"
            style={{
              border: "0",
              width: "800px",
              height: "600px",
              frameborder: "0",
              scrolling: "no",
            }}
            title="Google Calendar"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ClassScheduler;
