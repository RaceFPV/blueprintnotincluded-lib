import { Vector2 } from "../../vector2"
import { UiSaveSettings } from "../../b-export/b-ui-screen";

export interface MdbBuilding {
  id: string;
  temperature?: number;
  position?: Vector2;
  elements?: string[];
  settings?: UiSaveSettings[];
  connections?: number;
  orientation?: number;
  mass?: number;
}