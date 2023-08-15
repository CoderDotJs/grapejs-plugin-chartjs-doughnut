export default function addBlocks(editor, opts) {
  const componentType = opts.chartType;
  editor.BlockManager.add(componentType, {
    label: `
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<path d="M256,0C114.848,0,0,114.848,0,256s114.848,256,256,256s256-114.848,256-256S397.152,0,256,0z M336,256    c0,44.112-35.888,80-80,80s-80-35.888-80-80s35.888-80,80-80S336,211.888,336,256z M240,32.816V145.28    c-18.928,2.72-36.304,10.176-50.944,21.152l-79.52-79.52C145.056,56.096,190.288,36.352,240,32.816z M32,256    c0-56.016,20.8-107.152,54.912-146.464l79.52,79.52C152.416,207.76,144,230.88,144,256s8.416,48.24,22.432,66.944l-79.52,79.52    C52.8,363.152,32,312.016,32,256z M256,480c-56.016,0-107.152-20.8-146.464-54.912l79.52-79.52C207.76,359.584,230.88,368,256,368    c61.76,0,112-50.24,112-112c0-56.304-41.808-102.912-96-110.72V32.816C388.048,41.072,480,137.888,480,256    C480,379.52,379.52,480,256,480z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

 ${opts.chartBlockName}`,
    category: "Charts",
    content: `
    <div data-gjs-type="${componentType}" style="width:400px; height:400px; display:block;">
      <canvas data-gjs-type="${componentType}_canvas" style="width:400px; height:400px" class="chartsjs"></canvas>
    </div>`,
  });
}
