import { TopicContent } from '../../types';

export const designStepsContent: TopicContent = {
  title: 'The design steps',
  subtitle: 'The common thread of the course: each step produces what the next one needs',
  blocks: [
    {
      type: 'text',
      text: "This course follows the real order of the design engineer's work. Each step produces a result that becomes the input of the next — which is why they can't be done out of order.",
    },
    { type: 'illustration', name: 'design-roadmap', props: { step: 0 }, caption: 'The 8 steps of electrical design' },

    { type: 'heading', text: '1 · Read and prepare the architectural drawings' },
    {
      type: 'text',
      text: "We start from the architect's drawings: function and size of each room, vertical circulation, technical shafts. We then prepare them in AutoCAD to draw the electrical layers on top.",
    },
    { type: 'formula', text: '→ Output: base drawings ready for the electrical design' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 1 } },

    { type: 'heading', text: '2 · Estimate the load' },
    {
      type: 'text',
      text: "Before any detail, we assess the building's total power. This lets us confirm feasibility with the utility, know whether a transformer is needed, and reserve the technical rooms with the architect.",
    },
    { type: 'formula', text: '→ Output: estimated power, transformer and generator size, reserved rooms' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 2 } },

    { type: 'heading', text: '3 · Design the lighting' },
    {
      type: 'text',
      text: 'Room by room, we choose the luminaires and calculate how many are needed for the required illuminance (lumen method).',
    },
    { type: 'formula', text: '→ Output: luminaire layout and lighting circuits' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 3 } },

    { type: 'heading', text: '4 · Lay out sockets and power circuits' },
    {
      type: 'text',
      text: 'We place the sockets and equipment supplies (air conditioning, water heaters…) according to the furniture, then group them into circuits.',
    },
    { type: 'formula', text: '→ Output: socket and power circuits' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 4 } },

    { type: 'heading', text: '5 · Build the panel schedule' },
    {
      type: 'text',
      text: 'Every circuit is assigned to a panel: distribution across phases R/Y/B, demand factors, total panel load.',
    },
    { type: 'formula', text: '→ Output: the load and current of each panel' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 5 } },

    { type: 'heading', text: '6 · Choose the protection' },
    {
      type: 'text',
      text: 'Each circuit and feeder gets its breaker or fuse: rating, type, trip curve, and NEC rules for motors and air conditioning.',
    },
    { type: 'formula', text: '→ Output: the rating of every protective device' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 6 } },

    { type: 'heading', text: '7 · Size cables and conduits' },
    {
      type: 'text',
      text: 'Each cable cross-section follows from the current and its protection, corrected by installation factors. Then we choose the conduits.',
    },
    { type: 'formula', text: '→ Output: cable cross-sections and conduit diameters' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 7 } },

    { type: 'heading', text: '8 · Panel boards & single-line diagram' },
    {
      type: 'text',
      text: "We put it all together: panel board construction, the building's single-line diagram, and the transfer switch for the generator.",
    },
    { type: 'formula', text: '→ Output: the complete electrical package' },
    { type: 'illustration', name: 'design-roadmap', props: { step: 8 } },

    { type: 'heading', text: 'The common thread' },
    {
      type: 'text',
      text: 'Each section of this course matches one of these steps, in the same order.',
    },
    {
      type: 'note',
      text: '💡 If a result changes along the way (an added load, a modified room…), every following step must be revisited.',
    },
    { type: 'illustration', name: 'design-roadmap', props: { step: 9 } },
  ],
};
