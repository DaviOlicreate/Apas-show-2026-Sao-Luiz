document.addEventListener('DOMContentLoaded', () => {
    Reveal.initialize({
        // General presentation settings
        controls: true,
        progress: true,
        center: true,
        hash: true,
        
        // Transition style
        transition: 'slide', // none/fade/slide/convex/concave/zoom
        transitionSpeed: 'fast',

        // Dimensions to keep it looking good on any screen
        width: 1060,
        height: 700,
        margin: 0.04,
        minScale: 0.2,
        maxScale: 2.0,

        // Auto-animate settings for smoother visual transitions if added later
        autoAnimateDuration: 0.8,
        autoAnimateEasing: 'ease-out',
        autoAnimateUnmatched: false
    });
});
