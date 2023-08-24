import React from "react";
import PropTypes from "prop-types";
import { Stack, Card, Typography, Divider, TableBody } from "@mui/material";
import { Icon } from "../";

const Section = (props) => {
  return (
    <Card component="table" variant="outlined" sx={{ mb: 2, width: "100%" }}>
      {props.label && (
        <thead>
          <tr>
            <td>
              <Stack
                direction="row"
                alignItems="center"
                mx={2}
                my={2}
                spacing={1.5}
              >
                {props.iconSrc && <img src={props.iconSrc} width="24px" />}
                <Typography variant="h6">{props.label}</Typography>
              </Stack>

              <Divider />
            </td>
          </tr>
        </thead>
      )}
      <TableBody>{props.children}</TableBody>
    </Card>
  );
};

// const Section = (props) => {
//   return (
//     <Stack sx={{ mb: 2 }}>
//       <Card variant="outlined">
//         {props.label && (
//           <>
//             <Stack
//               direction="row"
//               alignItems="center"
//               mx={2}
//               my={2}
//               spacing={1.5}
//             >
//               {props.iconName && <Icon iconName={props.iconName} />}
//               <Typography variant="h6">{props.label}</Typography>
//             </Stack>

//             <Divider />
//           </>
//         )}
//         {props.children}
//       </Card>
//     </Stack>
//   );
// };

Section.propTypes = {
  label: PropTypes.string,
  iconName: PropTypes.string,
};

export default Section;
