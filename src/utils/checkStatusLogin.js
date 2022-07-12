
export function checkStatus(navigate) {
  // console.log("check")
  const token = sessionStorage.getItem('token')
  if(token===""){
    navigate("/signin");
  }
}