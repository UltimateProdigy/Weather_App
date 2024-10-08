import { Input } from "antd";
import SnowBall from "../components/SnowBall";

export default function Home() {
	return (
		<div className="relative bg-[url('/img/snow.png')] h-[100vh] pr-[100px] pl-[100px] pt-8">
			<img src="/W.svg" alt="weather" />
			<SnowBall />
			<div className="absolute bg-slate-400/30 backdrop-blur-sm w-[500px] h-[100vh] right-0 top-0 border-l-2 border-gray-300 border-transparent p-8">
				<Input placeholder="Search Location" variant="filled" />
				<p className="mt-6">Weather Details...</p>
                <div>
                  <p></p>
                </div>
			</div>
		</div>
	);
}
