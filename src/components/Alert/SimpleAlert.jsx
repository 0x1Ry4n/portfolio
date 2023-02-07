import React, { useState } from "react";
import { Stack, Alert, AlertTitle, Collapse } from "@mui/material";

const SimpleAlert = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <Stack sx={{ position: "relative", width: "25%", float: "right" }}>
      <Collapse in={open}>
        <Alert
          severity={props.severity}
          variant={props.variant}
          onClose={() => {
            setOpen(false);
          }}
        >
          <AlertTitle>
            <b>{props.severity === "error" ? "Erro!" : "Sucesso!"}</b>
          </AlertTitle>
          {props.severity === "error"
            ? "Verifique se o endereço do e-mail digitado está correto!"
            : "O e-mail foi enviado com sucesso!"}
        </Alert>
      </Collapse>
    </Stack>
  );
};

export default SimpleAlert;
