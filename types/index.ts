export interface Result {
  public_id: string;
  asset_id: string;
  url: string;
  context: { alt: string };
}

export interface Results {
  resources: Result[];
}
