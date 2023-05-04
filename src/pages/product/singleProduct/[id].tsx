import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../../layout";
import { RootState } from "../../../store/store";
import { sizeFilter, colorLists } from "../../../data/Constants";
import DescriptionAlerts from "../../../components/Alert/index";
import { useRouter } from "next/router";
import { getProduct } from "@/store/product/product.thunk";
import { addColor, addSize } from "@/store/product/product.slice";

import Image from "next/image";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// mui imports
import { Box, useTheme } from "@mui/material";
import WarningModel from "../../../components/WarningModel";

import ProductImageSlider from "@/sections/ProductImageSlider";
import ProductDetail from "@/sections/ProductDetail";

const ItemDetailView: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();

  //   const params = useParams();
  const { selectedProduct } = useSelector((state: RootState) => state.product);
  const { cartProducts, added, message } = useSelector(
    (state: RootState) => state.cart
  );

  const [openUp, setOpenUp] = useState<boolean>(false);
  const [save, setSave] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setSave(localStorage.getItem("token") || "");
    }
  }, []);

  useEffect(() => {
    if (router.isReady) {
      dispatch(getProduct(router.query.id));
    }
  }, [dispatch, router.isReady]);

  useEffect(() => {
    setOpenUp(added);
  }, [cartProducts]);

  return (
    <div>
      <Layout>
        <Box sx={{ maxWidth: "1600px", mx: "auto" }}>
          {added && (
            <DescriptionAlerts
              type="success"
              title="Success"
              message={message}
              openUp={added}
              setOpenUp={setOpenUp}
              closeDuration={2000}
              backgroundColor="#4caf50"
            />
          )}
          {open && <WarningModel open={open} setOpen={setOpen} />}
          <Box
            sx={{
              width: "90%",
              display: { sm: "flex" },
              gap: "55px",
              mx: "auto",
              mt: 6,
            }}
          >
            {/* slider */}
            <ProductImageSlider />
            {/* productDetail */}
            <ProductDetail setOpen={setOpen} save={save} />
          </Box>
        </Box>
      </Layout>
    </div>
  );
};

export default ItemDetailView;
