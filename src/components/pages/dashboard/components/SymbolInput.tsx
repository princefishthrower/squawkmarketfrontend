import * as React from "react";

export interface ISymbolInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SymbolInput(props: ISymbolInputProps) {
  const { value, onChange } = props;
  return (
    <div className="input-group w-auto mx-3">
      <input
        type="text"
        className="form-control"
        aria-label="Username"
        placeholder="VOO"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
