import pymongo

#define---------------------------------------------------------------------------------------------
client_key = "mongodb+srv://test_user:dummy_password@matchcluster0.nuqei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
database_name = "matchAccounts"
collection_name = "matchPeople"

#enter database, return collection and database -----------------------------------------------------
def enter_database():
    try:
        client = pymongo.MongoClient(client_key)
    except:
        print("Error Connecting")
    db = client[database_name]
    collection = db[collection_name]
    return db, collection

#check to see if ig exists. Only IG matches --------------------------------------------------------
def check_query(ig):
    db, collection = enter_database()
    #check_query = {"name": name, "ig": ig}
    check_query = {"ig": ig}
    check_exist = collection.count_documents(check_query)
    if(check_exist==0):
        return 0
    elif(check_exist>1):
        return("The impossible happened: duplicate error found")
    else:
        account_info = collection.find(check_query)
        for x in account_info:
            return x
        
#insert into collection if both name and ig exists--------------------------------------------------
def insert_db(name, ig, gender, crushes, matches, admirers):
    db, collection = enter_database()
    query = check_query(ig)
    if(query==0):
        insert_query = {
            "name":name,
            "ig":ig,
            "gender":gender,
            "crushes":crushes,
            "matches":matches,
            "admirers":admirers
            }
        collection.insert_one(insert_query)
        print("Data inserted")
    else:
        print("User already exists")

#return entries in collection-------------------------------------------------
def get_entries(amount = 100):
    db, collection = enter_database()
    ans = []
    count = 0
    for account in collection.find():
        ans.append(account)
        count = count+1
        if count == amount:
            break
    return ans

#Test Code====================================================================================
'''
#test query 
query = check_query("@killed_my_family")
print(query)

#test insert
insert_db("Itachi Uchiha", "@killed_my_family", "male", 1, 1, 20)
insert_db("Kaori Miyazono", "@dead", "female", 1, 1, 1)
insert_db("Lelouch Lamperouge", "@lord", "other", 10000, -22, 4)

#test get
all_entries = get_entries()
for i in all_entries:
    print(i)
'''
