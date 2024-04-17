import hero1 from "../../assets/hero1.webp";
import hero2 from "../../assets/hero2.webp";
import hero3 from "../../assets/hero3.webp";
import hero4 from "../../assets/hero4.webp";

const heroImages = [hero1, hero2, hero3, hero4];

function Hero() {
	return (
		<article className="grid lg:grid-cols-2 gap-24 items-center">
			<section>
				<h1 className=" text-xl mb-4 font-bold"> We are providing excellent customer experience</h1>
				<p className="text-sm"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, molestiae?</p>
			</section>
			<div className="hidden lg:carousel h-[20rem] carousel-center px-4 space-x-4 rounded-box">
				{heroImages.map(image => {
					return (
						<div
							key={image}
							className="carousel-item"
						>
							<img
								src={image}
								className="rounded-box h-full w-80 object-cover"
								alt="hero"
							/>
						</div>
					);
				})}
			</div>
		</article>
	);
}

export default Hero;
