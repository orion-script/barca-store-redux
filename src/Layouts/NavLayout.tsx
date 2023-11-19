import React from "react";
interface navlayout {
  children: any;
}
const styles = {
  parentContainer: "w-full h-full",
  container: "w-full h-full 2xl:container 2xl:mx-auto",
};
const NavLayout = ({ children }: navlayout) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default NavLayout;
