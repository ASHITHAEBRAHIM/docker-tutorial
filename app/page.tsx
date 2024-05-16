import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-5xl text-blue-600 font-bold ">Hello Docker!</h1>
        <Image src='/docker.png' height={250} width={250} alt='docker'/>
        <p className="text-black">
        Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.The service has both free and premium tiers. The software that hosts the containers is called Docker Engine.[6] It was first released in 2013 and is developed by Docker,
D       Docker is a tool that is used to automate the deployment of applications in lightweight containers so that applications can work efficiently in different environments in isolation.
        </p>
      </div>
    </main>
  )
}

