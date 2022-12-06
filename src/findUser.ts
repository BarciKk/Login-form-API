export const findUser = async ( email: string, password: string) => {
  
  return new Promise((resolve, reject) => {
    if (!users) {
      reject(new Error('users not fetched'));
    } else {
      const user = users.find(
        (user: any) => user.emial === email && user.username === password,
      );
        
      if (user) {
        resolve(user);
       
      } else {
        reject(new Error('user not found!'));
      }
    }
  });
};
