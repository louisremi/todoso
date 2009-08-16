// Weird, but there seem to be no other way to make sure 
// that the connection is made before we build the model
if(!ActiveRecord.connection) {
	ActiveRecord.connect(ActiveRecord.Adapters.JaxerSQLite);
}

User = ActiveRecord.create('users', {
	username: '',
	password: ''
});

Article = ActiveRecord.create('articles', {
	type: '',
	firstCreated: {
		type: 'TIMESTAMP'
	}
});

Tag = ActiveRecord.create('tags', {
	label: '',
	
});

Section = ActiveRecord.create('sections', {
	position: {
		type: 'INTEGER'
	}
});

Script = ActiveRecord.create('scripts', {
	content: ''
});

Style = ActiveRecord.create('style', {
	content: ''
});

Html = ActiveRecord.create('htmls', {
	content: ''
});

User.hasMany(Article);

Article.hasMany(Tag);
Article.hasOne(Article);
Article.hasOne(Script);
Article.hasOne(Style);
Article.hasOne(Html);

Tag.belongsTo(User);

Section.belongsTo(Article);
Section.hasOne(Script);
Section.hasOne(Style);
Section.hasOne(Html);