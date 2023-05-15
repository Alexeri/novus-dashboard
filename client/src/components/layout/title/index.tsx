import { TitleProps, useRouterContext } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import React from "react";

import { novus, icon} from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple >
      <Link to="/">
        {collapsed ? (
          <img src={icon} alt="Logo" width="28px" />
        ) : (
          <img src={novus} alt="Logo" width="140px" />
        )}
      </Link>
    </Button>
  );
};
