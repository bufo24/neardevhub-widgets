declare interface BosContext {
  accountId?: string;
  networkId: NetworkId;
}

declare const Widget: (params: {
  src: string;
  props: object;
}) => React.ReactNode;

declare interface BaseProps {
  page: any;
}

declare var styled = {
  div,
  a,
  ul,
};
