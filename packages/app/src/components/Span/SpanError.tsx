import React from "react";

interface SpanErrorProps {
  text: string;
}

function SpanError(props: SpanErrorProps) {
  return <span className="text-beachRed">{props.text}</span>;
}

export default SpanError;
