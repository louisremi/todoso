function getImageSrc(innerHTML) {
    return innerHTML.slice(innerHTML.indexOf('src=\\') +7, innerHTML.indexOf('png') +3);
	//return innerHTML.replace(/"(.*?)\.png"/, "$1.png");
}

SectionView = ActiveView.create(function() {
    var sec,
		sectionAttr = {'data-id': this.get('id')};
	if(this.get('unit'))
		sectionAttr.className = "unit";
	with(this.builder) {
        sec = section(sectionAttr,
            img({
				className: 'unitBackground',
                src: getImageSrc(this.get('background')),
                style: "width: 100%; height: 100%;"
            }),
            img({
                src: getImageSrc(this.get('html')),
                style: "width: 100%; height: 100%;"
            })
        );
        if(this.get('wrap'))
            sec = div({
					className: 'unitWrap',
					style: "top: 4%; left: 2%; position: absolute;" 
				},
                sec
            );
    }
    return sec;
});

ArticleView = ActiveView.create(function() {
    with(this.builder) {
        var id = this.get('id'),
            firstSection = Section.find({first: true, where: {article_id: id, position: 0}});
        return div({
				className: 'unitWrap',
				style: "top:"+ this.get('top') + "%; left:"+ this.get('left') + "%;"
			},
            this.article = article({className: 'unit', 'data-id': id, id: 'p' + id},
                div({className: "section"}),
                div({className: "section odd"}),
                new SectionView({
                    background: this.get('html'),
                    html: firstSection.getHtml().get('content'),
                    id: firstSection.get('id')
                })
            )
        )
    }
});