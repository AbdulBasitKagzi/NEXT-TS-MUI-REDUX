import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../../layout";
import { RootState } from "../../../store/store";

import DescriptionAlerts from "../../../components/Alert/index";
import { useRouter } from "next/router";
import { getProduct } from "@/store/product/product.thunk";

import "swiper/css";
import "swiper/css/navigation";

// mui imports
import { Box } from "@mui/material";
import WarningModel from "../../../components/WarningModel";

import ProductImageSlider from "@/sections/ProductImageSlider";
import ProductDetail from "@/sections/ProductDetail";

const ItemDetailView: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch<any>();

  //   const params = useParams();

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
