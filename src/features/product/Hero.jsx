import { Link } from "react-router-dom";
import hero from "../../assets/hero.webp";

function Hero() {
	return (
		<section className="grid lg:grid-cols-2 gap-16 items-center">
			<article>
				<h1 className=" text-xl mb-4 font-bold"> We are providing excellent customer experience</h1>
				<p className="text-sm"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, molestiae?</p>
				<div className="mt-10">
					<Link
						to="/products"
						className="btn btn-primary"
					>
						Our Products
					</Link>
				</div>
			</article>
			<article className="hidden lg:block ">
				<img
					className="h-[300px] w-[500px] rounded-lg"
					src={hero}
					alt="Hero photo"
				/>
			</article>
		</section>
	);
}

export default Hero;
