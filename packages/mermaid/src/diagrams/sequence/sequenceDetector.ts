import type { DiagramDetector, ExternalDiagramDefinition } from '../../diagram-api/types.js';

const id = 'sequence';

const detector: DiagramDetector = (txt) => {
  return txt.match(/^\s*sequenceDiagram/) !== null;
};

const loader = async () => {
  const { diagram } = await import('./sequenceDiagram.js');
  return { id, diagram };
};

const plugin: ExternalDiagramDefinition = {
  id,
  detector,
  loader,
};

export default plugin;
