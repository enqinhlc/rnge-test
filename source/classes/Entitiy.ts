export interface Coordinates {
  x: number;
  y: number;
}
export interface Dimensions {
  width: number;
  height: number;
}
export interface Body {
  label: string;
  position: Coordinates;
  size: Dimensions;
  bounds?: Coordinates;
}

export interface Options {
  store: boolean;
}

export interface Entitity {
  id: string;
  label?: string;
  body?: Body;
  options?: Options;
  tags: string[];
  custom: any;
  renderer: JSX.Element;
}

class Entitiy {
  public entities: { [key: string]: Entitity } = {};

  public getEntities = () => {
    return this.entities;
  };

  entitiyModel: Entitity = {
    body: {
      position: { x: 0, y: 0 },
      size: { width: 0, height: 0 },
      bounds: { x: 0, y: 0 },
    },
    tags: [],
  };

  public create = ({ id, body, tags, options, custom, renderer }: Entitity) => {
    if (id in this.entities) {
      console.error('id exists for entitiy base');
      return false;
    } else {
      const entitiy = {
        ...this.entitiyModel,
        ...options,
        ...custom,
        renderer,
      };
      if (body) entitiy.body = body;
      if (tags) entitiy.tags = tags;

      this.entities[id] = entitiy;

      return entitiy;
    }
  };

  public updateBounds = (tags: string[], { x, y }: Coordinates) => {
    Object.keys(this.entities).map((id) => {
      if (this.entities[id].tags.includes(tags)) {
        //update
        this.entities[id].body.bounds.x += x;
        this.entities[id].body.bounds.y += y;
      }
    });

    return this.entities;
  };
}

export default new Entitiy();
