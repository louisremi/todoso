function Add3presentations() {
    
var p0H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p0 b.png" />', true)
});

var p0s0H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p0 s0.png" />', true)
});

var p0s1H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p0 s1.png" />', true)	
});

var p0s2H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p0 s2.png" />', true)	
});

var p0s3H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p0 s3.png" />', true)	
});

var p0s4H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p0 s4.png" />', true)	
});

var p0s5H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p0 s5.png" />', true)	
});

var p0s6H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p0 s6.png" />', true)	
});

var p0s7H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p0 s7.png" />', true)	
});

var p0s8H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p0 s8.png" />', true)	
});

var p0s9H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p0 s9.png" />', true)	
});

var p0s10H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p0 s10.png" />', true)	
});

var p0s11H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p0 s11.png" />', true)	
});

var p1H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p1 b.png" />', true)	
});

var p1s0H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p1 s0.png" />', true)	
});

var p1s1H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p1 s1.png" />', true)	
});

var p1s2H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p1 s2.png" />', true)	
});

var p1s3H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p1 s3.png" />', true)	
});

var p2H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p2 b.png" />', true)	
});

var p2s0H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p2 s0.png" />', true)	
});

var p2s1H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p2 s1.png" />', true)	
});

var p2s2H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p2 s2.png" />', true)	
});

var p2s3H = Html.create({
	content: ActiveRecord.escape('<img style="width: 100%; height: 100%;" src="fileDb/image/p2 s3.png" />', true)	
});

/*var t0 = Tag.create({
	label: "cat"
});

var t1 = Tag.create({
	label: "template"
});

var t2 = Tag.create({
	label: "funny"
});*/

var p0 = Article.create({
	type: 'presentation'
});
//p0.createTag(t0);
//p0.createTag(t1);
//p0.createTag(t2);

var p1 = Article.create({
	type: 'presentation'
});
//p1.createTag(t0);
//p1.createTag(t1);
//p1.createTag(t2);

var p2 = Article.create({
	type: 'presentation'
});
//p2.createTag(t0);
//p2.createTag(t1);
//p2.createTag(t2);

function shuffle(o){ //v1.0
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

var pTemp = shuffle([p0, p1, p2]);

p0 = pTemp[0];
p1 = pTemp[1];
p2 = pTemp[2];

p0.createHtml(p0H);
p1.createHtml(p1H);
p2.createHtml(p2H);


var p0s0 = Section.build({
	position: 0
});
p0s0.createHtml(p0s0H);
p0s0.createArticle(p0);
p0s0.save();

var p0s1 = Section.build({
	position: 1
});
p0s1.createHtml(p0s1H);
p0s1.createArticle(p0);
p0s1.save();

var p0s2 = Section.build({
	position: 2
});
p0s2.createHtml(p0s2H);
p0s2.createArticle(p0);
p0s2.save();

var p0s3 = Section.build({
	position: 3
});
p0s3.createHtml(p0s3H);
p0s3.createArticle(p0);
p0s3.save();

var p0s4 = Section.build({
	position: 4
});
p0s4.createHtml(p0s4H);
p0s4.createArticle(p0);
p0s4.save();

var p0s5 = Section.build({
	position: 5
});
p0s5.createHtml(p0s5H);
p0s5.createArticle(p0);
p0s5.save();

var p0s6 = Section.build({
	position: 6
});
p0s6.createHtml(p0s6H);
p0s6.createArticle(p0);
p0s6.save();

var p0s7 = Section.build({
	position: 7
});
p0s7.createHtml(p0s7H);
p0s7.createArticle(p0);
p0s7.save();

var p0s8 = Section.build({
	position: 8
});
p0s8.createHtml(p0s8H);
p0s8.createArticle(p0);
p0s8.save();

var p0s9 = Section.build({
	position: 9
});
p0s9.createHtml(p0s9H);
p0s9.createArticle(p0);
p0s9.save();

var p0s10 = Section.build({
	position: 10
});
p0s10.createHtml(p0s10H);
p0s10.createArticle(p0);
p0s10.save();

var p0s11 = Section.build({
	position: 11
});
p0s11.createHtml(p0s11H);
p0s11.createArticle(p0);
p0s11.save();

var p1s0 = Section.build({
	position: 0
});
p1s0.createHtml(p1s0H);
p1s0.createArticle(p1);
p1s0.save();

var p1s1 = Section.build({
	position: 1
});
p1s1.createHtml(p1s1H);
p1s1.createArticle(p1);
p1s1.save();

var p1s2 = Section.build({
	position: 2
});
p1s2.createHtml(p1s2H);
p1s2.createArticle(p1);
p1s2.save();

var p1s3 = Section.build({
	position: 3
});
p1s3.createHtml(p1s3H);
p1s3.createArticle(p1);
p1s3.save();

var p2s0 = Section.build({
	position: 0
});
p2s0.createHtml(p2s0H);
p2s0.createArticle(p2);
p2s0.save();

var p2s1 = Section.build({
	position: 1
});
p2s1.createHtml(p2s1H);
p2s1.createArticle(p2);
p2s1.save();

var p2s2 = Section.build({
	position: 2
});
p2s2.createHtml(p2s2H);
p2s2.createArticle(p2);
p2s2.save();

var p2s3 = Section.build({
	position: 3
});
p2s3.createHtml(p2s3H);
p2s3.createArticle(p2);
p2s3.save();

}