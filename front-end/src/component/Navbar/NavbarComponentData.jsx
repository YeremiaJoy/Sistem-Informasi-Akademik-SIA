export const NavbarData =
  localStorage.getItem("type") === null
    ? [
        {
          id: 1,
          name: "Home",
          link: "/",
        }    
      ]
    :  
    localStorage.getItem("type") === "student"
    ? [
        {
          id: 1,
          name: "Home",
          link: "/",
        }, 
        {
            id: 2,
            name: "Enroll",
            link: "/enroll",
        }
      ]
    : [
        {
          id: 1,
          name: "Home",
          link: "/",
        },
        {
          id: 2,
          name: "Major",
          link: "/major",
        },
        {
          id: 3,
          name: "Student",
          link: "/student",
        },
        {
          id: 4,
          name: "Course",
          link: "/course",
        },
        {
          id: 5,
          name: "Teacher",
          link: "/teacher",
        },
    ]  
