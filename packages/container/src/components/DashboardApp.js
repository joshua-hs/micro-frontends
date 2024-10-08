import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

function DashboardApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
}

export default DashboardApp;
