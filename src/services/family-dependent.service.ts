import { FamilyDependent } from '../models/family-dependent';
import { Member } from '../models/member';

export class FamilyDependentService {
	private familyDependents: FamilyDependent[] = [];
	private familyDependent: FamilyDependent;
	private memberId: number;
	private id: number = 0;

	addFamilyDependent(familyDependent: FamilyDependent) {
		familyDependent.id = this.id++;
		if(!familyDependent.updateDate)
			familyDependent.updateDate = new Date()
		this.familyDependents.push(familyDependent);
	}

	getFamilyDependents() {
		return this.familyDependents.slice();
	}

	getFamilyDependentsByMemberId(filterByMember: number) {
		let familyDependentsByMember: FamilyDependent[] = [];
		console.log('getSearchMembers this.familyDependents: ' + JSON.stringify(familyDependentsByMember.slice()));
		
		this.familyDependents.filter(function(item, index, array){
			if(item.memberId == filterByMember)
				familyDependentsByMember.push(item)
		});
		console.log('getSearchMembers this.familyDependents: ' + JSON.stringify(familyDependentsByMember.slice()));
		
		return familyDependentsByMember
	}

	getFamilyDependent() {
		return this.familyDependent;
	}

	updateAllFamilyDependents(familyDependent: FamilyDependent) {
		// 找出要移除的member
		let removeIndex = this.familyDependents.map(item => item.id).indexOf(familyDependent.id);
		// push修改過的member
		this.familyDependents[removeIndex] = familyDependent
		
		// this.members.push(member);
		console.log('this.familyDependents before splice: ' + JSON.stringify(this.familyDependents));
		// 移除前一個版本的member
		// this.members.splice(removeIndex,1);
		// console.log('this.members test: ' + JSON.stringify(this.members));
	}

	getSearchFamilyDependents(queryText: String){
		let tempfamilyDependents: FamilyDependent[] = [];
		this.familyDependents.filter(function(item, index, array){
			if(item.name == queryText)
				tempfamilyDependents.push(item)
		});
		
		console.log('getSearchMembers this.familyDependents: ' + JSON.stringify(tempfamilyDependents.slice()));
		return tempfamilyDependents
	}
}