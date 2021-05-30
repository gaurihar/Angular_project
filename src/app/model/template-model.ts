export interface TName{
  index_patterns:string[];
  template?:Template
  
}

export interface Template{
  settings?:Settings
  mappings:Mappings
}

export interface Settings {
  index: Index;
}

export interface Index {
  lifecycle?: Lifecycle;
  number_of_shards: string;
  auto_expand_replicas?: string;
  number_of_replicas?: string;
  format?: string;
  refresh_interval?: string;
  priority?: string;
}

export interface Lifecycle {
  name: string;
}

export interface Mappings{
    dynamic: boolean;
    properties: Property;
  }

//This model is created o
export interface Attributes{
  name: string;
  type:string;
  format?:string;
}

export interface Mapper{
  type:string;
  format?:string;
}

export interface Property{
  [key:string]: Mapper;
}