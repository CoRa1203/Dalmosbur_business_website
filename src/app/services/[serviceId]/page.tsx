// 'use client'

// import { SERVICES } from "@/data/services"
// import { useParams } from "next/navigation"


// export default function ProductPage(){

//     const params = useParams()
//     const serviceId = params?.serviceId

//     const service = SERVICES.find(
//     (service) => service.toString() === serviceId
//   );


//   if (!service) {
//   return <div>Загрузка...</div>;
// }
//     return (
// <>
// <p>{service?.title}</p>
// <p>{service?.id}</p>
// </>
//     )
// }