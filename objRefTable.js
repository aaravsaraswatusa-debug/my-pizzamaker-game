const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{Background: 0},
	{Dough: 0},
	{ID: 0},
	{Ketchup: 0},
	{Cheese: 0},
	{Pepronni: 0},
	{Mushroom: 0},
	{GreenPepper: 0},
	{Mouse: 0},
	{Touch: 0},
	{Sell: 0},
	{MoneyDisplay: 0},
	{Olive: 0},
	{Delete: 0},
	{Money: 0},
	{ToppingCount: 0}
];

self.InstanceType = {
	Background: class extends self.ISpriteInstance {},
	Dough: class extends self.ISpriteInstance {},
	Ketchup: class extends self.ISpriteInstance {},
	Cheese: class extends self.ISpriteInstance {},
	Pepronni: class extends self.ISpriteInstance {},
	Mushroom: class extends self.ISpriteInstance {},
	GreenPepper: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	Sell: class extends self.ISpriteInstance {},
	MoneyDisplay: class extends self.ITextInstance {},
	Olive: class extends self.ISpriteInstance {},
	Delete: class extends self.ISpriteInstance {}
}