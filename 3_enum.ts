enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
const membershipReverse = Membership[2];
console.log('1', membership, '2', membershipReverse);

enum SocialMedia {
    VK = 'VK',
    Facebook = 'Facebook',
    Twitter = 'Twitter'
}

const social = SocialMedia.Facebook;
console.log(social)