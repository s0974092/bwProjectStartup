import { Member } from '../models/member';

export class MemberService {
	private members: Member[] = [];
	private member: Member;
	private id: number = 0;

	addMember(member: Member) {
		member.id = this.id++;
		this.members.push(member);
	}

	getMembers() {
		return this.members.slice();
	}

	getMember() {
		return this.member;
	}

	updateAllMembers(member: Member) {
		// 找出要移除的member
		let removeIndex = this.members.map(item => item.id).indexOf(member.id);
		// push修改過的member
		this.members.push(member);
		console.log('this.members before splice: ' + JSON.stringify(this.members));
		// 移除前一個版本的member
		this.members.splice(removeIndex,1);
		console.log('this.members test: ' + JSON.stringify(this.members));
	}

	getSearchMembers(queryText: String){
		let tempMembers: Member[] = [];
		this.members.filter(function(item, index, array){
			if(item.name == queryText)
				tempMembers.push(item)
		});
		
		console.log('getSearchMembers this.members: ' + JSON.stringify(tempMembers.slice()));
		return tempMembers
	}
}