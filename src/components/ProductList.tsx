import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ProductType = {
  slug: string;
  name: string;
  logo: string;
};

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(
      "http://localhost:1337/api/products?fields[0]=name&fields[1]=slug&populate[logo][fields][0]=url"
    )
      .then((res) => res.json())
      .then((json) => {
        const mapped = json.data.map((item: any) => ({
          slug: item.slug,
          name: item.name,
          logo: item.logo?.url || "",
        }));
        setProducts(mapped);
      });
  }, []);

  useEffect(() => {
    if (products.length > 0 && wrapperRef.current) {
      const totalWidth = wrapperRef.current.scrollWidth;

      gsap.to(wrapperRef.current, {
        x: `-${totalWidth / 2}px`,
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    }
  }, [products]);

  return (
    <TooltipProvider>
      <div className="overflow-hidden w-full bg-white py-6 mb-20">
        <div className="flex gap-10 whitespace-nowrap w-max" ref={wrapperRef}>
          {[...products, ...products].map((product, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger asChild>
                <a
                  href={`/products/${product.slug}`}
                  className="flex flex-col justify-center items-center space-x-4 min-w-[200px] cursor-pointer"
                >
                  <img
                    src={`http://localhost:1337${product.logo}`}
                    alt={product.name}
                    className="w-32 h-32 object-contain"
                  />
                  <span className="text-lg font-semibold">{product.name}</span>
                </a>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>{product.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
