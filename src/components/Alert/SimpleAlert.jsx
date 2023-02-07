import React, { useState, useEffect } from "react";
import { Stack, Alert, AlertTitle, Collapse } from "@mui/material";

const SimpleAlert = (props) => {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (props.open) setOpen(true);
    else setOpen(false);
  }, [props]);

  return (
    <Stack
      sx={{
        position: "relative",
        width: "50%",
        float: "right",
        display: "inline",
      }}
    >
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
