class Bank:

    def __init__(self):
        self.accounts = {}
    
    def create(self, account_id: int, initial_balance: int) -> bool:

        if account_id in self.accounts:
            return False

        self.accounts[account_id] = initial_balance
        return True
    
    def deposit(self, account_id: int, amount: int) -> int:
        if account_id not in self.accounts:
            return -1

        self.accounts[account_id] += amount
        return self.accounts[account_id]
    
    def transfer(self, from_account: int, to_account: int, amount: int) -> bool:

        if from_account not in self.accounts or to_account not in self.accounts:
            return False

        if self.accounts[from_account] < amount:
            return False

        self.accounts[from_account] -= amount
        self.accounts[to_account] += amount
        return True